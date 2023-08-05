/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import ViewCartContainer from './CartModal';

const ViewCart = ({navigation, restaurantName}: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const cartData = useSelector(
    (state: any) => state.cartReducer.selectedItems.items,
  );
  // console.log('cartData', cartData);
  const total = cartData
    .map((item: any) => Number(item.price.replace('₹', '')))
    .reduce((acc: number, val: any) => acc + val, 0);

  console.log('total', total);

  const totalInd = total.toLocaleString('en', {
    style: 'currency',
    currency: 'INR',
  });

  const handleModalVisibility = () => {
    setModalVisible(true);
  };
  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            position: 'absolute',
            alignItems: 'center',
            bottom: 25,
            justifyContent: 'center',
            flexDirection: 'row',
            zIndex: 999,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 300,
                position: 'relative',
                zIndex: 999,
              }}
              onPress={handleModalVisibility}>
              <Text style={{color: '#fff', fontSize: 22}}>View Cart</Text>
              <Text style={{color: '#fff', fontSize: 20}}>{totalInd}</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <ViewCartContainer
              setModalVisible={setModalVisible}
              total={totalInd}
              cartData={cartData}
            />
          </Modal>
        </View>
      ) : null}
    </>
  );
};

export default ViewCart;
