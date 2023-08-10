/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

interface item {
  id?: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

interface RNameInterface {
  restaurantName: string;
  itemData: item[];
  hideCheckBox: boolean;
  IsMarginLeft: boolean;
}

const MenuItem = ({
  restaurantName,
  itemData,
  hideCheckBox,
  IsMarginLeft,
}: RNameInterface) => {
  console.log('DFvdfv', itemData);

  return (
    <View style={{paddingBottom: 1, backgroundColor: '#fff'}}>
      {itemData?.map((item, index) => {
        return (
          <View key={index} style={{marginVertical: 5}}>
            <Item
              item={item}
              restaurantName={restaurantName}
              hideCheckBox={hideCheckBox}
              IsMarginLeft={IsMarginLeft}
            />
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
  hideCheckBox: boolean;
  IsMarginLeft: boolean;
}

const Item = ({
  item,
  restaurantName,
  hideCheckBox,
  IsMarginLeft,
}: ItemProps) => {
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
      {hideCheckBox ? (
        ''
      ) : (
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
      )}
      <View
        style={{
          flex: 0.7,
          backgroundColor: '#fff',
          marginLeft: IsMarginLeft ? 10 : 0,
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
          {item?.title}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 3,
            fontWeight: '500',
            maxWidth: '100%',
          }}>
          {item?.desc}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 5,
            fontWeight: '500',
          }}>
          {item?.price}
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
