import {SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ShowOrder from '../components/Order/ShowOrder';

const OrderCompleted = () => {
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

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ShowOrder restaurantName={restaurantName} totalInd={totalInd} />
    </SafeAreaView>
  );
};

export default OrderCompleted;
