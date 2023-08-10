/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import ShowOrder from '../components/Order/ShowOrder';
import firestore from '@react-native-firebase/firestore';
import MenuItem from '../components/restaurantDetail/MenuItem';
import LottieView from 'lottie-react-native';

const OrderCompleted = () => {
  const [cartItemData, setCartItemData] = React.useState<any>({});

  const {items, restaurantName} = useSelector(
    (state: any) => state.cartReducer.selectedItems,
  );

  const total = items
    .map((item: any) => Number(item.price.replace('₹', '')))
    .reduce((acc: number, val: any) => acc + val, 0);

  const totalInd = total.toLocaleString('en', {
    style: 'currency',
    currency: 'INR',
  });

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map(doc => {
          setCartItemData(doc.data());
        });
      });

    return () => unsubscribe();

    // if (cartItemData.items.length > 0) {
    //   console.log('cartItemData', cartItemData.items);
    // }
    // console.log('cartItemData', cartItemData);
    // return () => foodItemInCart();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ShowOrder restaurantName={restaurantName} totalInd={totalInd} />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem
            restaurantName={restaurantName}
            itemData={cartItemData.items}
            hideCheckBox={true}
            IsMarginLeft={true}
          />
          <LottieView
            style={{height: 150, marginBottom: 40}}
            autoPlay
            source={require('../assests/animations/cooking.json')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCompleted;
