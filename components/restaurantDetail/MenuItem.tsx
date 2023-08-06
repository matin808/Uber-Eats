/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

interface item {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

const itemData: item[] = [
  {
    id: 1,
    title: 'Lasagna',
    desc: 'With butter lettuce, tomato and sauce bechamel',
    price: '₹250',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: 2,
    title: 'Tandoori Chicken',
    desc: 'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '₹270',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Chilaquiles',
    desc: 'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '₹350',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: 4,
    title: 'Chicken Caesar Salad',
    desc: 'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '₹400',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: 5,
    title: 'Lasagna',
    desc: 'With butter lettuce, tomato and sauce bechamel',
    price: '₹450',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

interface RNameInterface {
  restaurantName: string;
}

const MenuItem = ({restaurantName}: RNameInterface) => {
  return (
    <View style={{paddingBottom: 1, backgroundColor: '#fff'}}>
      {itemData.map((item, index) => {
        return (
          <View key={index} style={{flex: 1, marginVertical: 5}}>
            <Item item={item} restaurantName={restaurantName} />
            <Divider
              width={0.5}
              orientation="vertical"
              style={{marginHorizontal: 20}}
            />
          </View>
        );
      })}
    </View>
  );
};

interface ItemProps {
  item: item;
  restaurantName: string;
}

const Item = ({item, restaurantName}: ItemProps) => {
  const cartItems = useSelector(
    (state: any) => state.cartReducer.selectedItems.items,
  );

  const isFoodInCart = (food: item, cartItems: item[]) => {
    return Boolean(cartItems.find(item => item.id === food.id));
  };

  const dispatch = useDispatch();

  const selectedItem = (checked: boolean, item: item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checked,
      },
    });
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 5,
        marginBottom: 20,
      }}>
      <View style={{alignSelf: 'center', marginLeft: 20}}>
        <BouncyCheckbox
          iconStyle={{borderColor: 'lightgray'}}
          fillColor="green"
          onPress={checked => selectedItem(checked, item)}
          isChecked={isFoodInCart(item, cartItems)}
          // isChecked={
          //   cartItems.findIndex((cartItem: item) => cartItem.id === item.id) >
          //   -1
          //     ? true
          //     : false
          // }
        />
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: '#fff',
          // paddingHorizontal: 12,
          paddingRight: 10,
          paddingVertical: 6,
        }}>
        <Text
          style={{
            borderRadius: 10,
            fontSize: 21,
            fontWeight: '600',
            paddingVertical: 3,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 3,
            fontWeight: '500',
            maxWidth: '100%',
          }}>
          {item.desc}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            fontWeight: '500',
          }}>
          {item.price}
        </Text>
      </View>
      <View style={{flex: 0.3, marginRight: 10, alignSelf: 'center'}}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{width: '100%', height: 90, borderRadius: 10}}
        />
      </View>
    </View>
  );
};

export default MenuItem;
