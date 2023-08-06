/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type ViewCartContainerProps = {
  setModalVisible: (arg0: boolean) => void;
  total: number;
  cartData: any;
  restaurantName: string;
  handlePress: () => void;
};

const ViewCartContainer = ({
  setModalVisible,
  total,
  cartData,
  restaurantName,
  handlePress,
}: ViewCartContainerProps) => {
  //   const restaurantName = useSelector(
  //     (state: any) => state.cartReducer.selectedItems.restaurantName,
  //   );

  return (
    <View style={styles.viewCartContainer}>
      <View style={styles.viewCartSection}>
        <MaterialCommunityIcons
          onPress={() => setModalVisible(false)}
          name="close-circle"
          size={25}
        />
        <Text
          style={{
            marginVertical: 5,
            marginBottom: 20,
            alignSelf: 'center',
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          {restaurantName}
        </Text>
        <View>
          <FlatList
            data={cartData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.cartItemsDataStyle}>
                  <Text style={[styles.cartItemsTextStyle, {marginLeft: 10}]}>
                    {item?.title}
                  </Text>
                  <Text
                    style={[
                      styles.cartItemsTextStyle,
                      {marginLeft: 'auto', marginRight: 20},
                    ]}>
                    {item?.price}
                  </Text>

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

        <TouchableOpacity onPress={handlePress} style={styles.checkoutBtnStyle}>
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
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 12,
  },
  cartItemsTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
  cartItemsTotalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export default ViewCartContainer;
