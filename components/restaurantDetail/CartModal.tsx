/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Divider} from 'react-native-elements';

type ViewCartContainerProps = {
  setModalVisible: (arg0: boolean) => void;
  total: number;
  cartData: any;
};

const ViewCartContainer = ({
  setModalVisible,
  total,
  cartData,
}: ViewCartContainerProps) => {
  const restaurantName = useSelector(
    (state: any) => state.cartReducer.selectedItems.restaurantName,
  );

  //   const cartItemsData = useSelector(
  //     (state: any) => state.cartReducer.selectedItems.items,
  //   );
  // console.log('cartData chckout', cartData);
  return (
    <View style={styles.viewCartContainer}>
      <View style={styles.viewCartSection}>
        <Text
          style={{
            marginVertical: 10,
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          {restaurantName}
        </Text>
        <View>
          <FlatList
            data={cartData}
            keyExtractor={item => item.key}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.cartItemsDataStyle}>
                  <Text style={styles.cartItemsTextStyle}>{item?.title}</Text>
                  <Text style={styles.cartItemsTextStyle}>{item?.price}</Text>
                  <Divider width={5} />
                </View>
              );
            }}
          />

          <View style={styles.cartItemsTotalStyle}>
            <Text style={{fontWeight: '600', fontSize: 19}}>Sub-Total</Text>
            <Text style={{fontWeight: '600', fontSize: 19}}>{total}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.checkoutBtnStyle}>
          <Text style={styles.CheckOutTextStyle}>Checkout</Text>
          <Text style={styles.CheckOutTextStyle}>{total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewCartContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    flex: 1,
  },

  viewCartSection: {
    // position: 'absolute',
    // bottom: 0,
    width: '100%',
    padding: 20,
    backgroundColor: '#fefefe',
  },

  checkoutBtnStyle: {
    backgroundColor: 'black',
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    marginBottom: 30,
    borderRadius: 30,
    marginTop: 10,
    //
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    zIndex: 999,
  },
  CheckOutTextStyle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 19,
  },
  cartItemsDataStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    // margin: 20,
    marginVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  cartItemsTextStyle: {
    fontSize: 18,
  },
  cartItemsTotalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export default ViewCartContainer;
