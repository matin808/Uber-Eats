import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';

interface item {
  title: string;
  desc: string;
  price: string;
  image: string;
}

const itemData: item[] = [
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },

  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
  },
  {
    title: 'Tandoori chicken',
    desc: 'Yummy, Tasty, Happy Meal, Enjoy the best and tasty food in the world',
    price: '$10.99',
    image:
      'https://img.freepik.com/premium-photo/tandoori-chicken-is-chicken-dish-prepared-by-roasting-chicken-marinated-yogurt-spices-tandoor-clay-oven-served-with-onion-green-chutney_466689-77620.jpg',
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
  const dispatch = useDispatch();

  const selectedItem = (item: item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {item, restaurantName: restaurantName},
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
          onPress={() => selectedItem(item)}
        />
      </View>
      <View
        style={{
          flex: 2.8,
          backgroundColor: '#fff',
          // paddingHorizontal: 12,
          paddingRight: 10,
          paddingVertical: 6,
        }}>
        <Text
          style={{
            borderRadius: 10,
            fontSize: 23,
            fontWeight: '600',
            paddingVertical: 3,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginVertical: 3,
            fontWeight: '500',
            maxWidth: '90%',
            marginLeft: 5,
          }}>
          {item.desc}
        </Text>
        <Text
          style={{
            fontSize: 15,
            marginVertical: 5,
            fontWeight: '500',
            marginLeft: 5,
          }}>
          {item.price}
        </Text>
      </View>
      <View style={{flex: 1, marginRight: 10, marginTop: 5}}>
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
