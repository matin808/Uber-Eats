import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

const RestaurantDetail = ({route, navigation}: any) => {
  // route contains the data passed from Home.tsx
  return (
    //
    <>
      <View style={styles.RestaurantDetailContainer}>
        {/* to access it in about component we have to send it to about */}
        <About route={route} />

        <Divider width={1.8} style={styles.DividerStyle} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem restaurantName={route.params?.name} />
      </ScrollView>
      <ViewCart navigation={navigation} restaurantName={route.params?.name} />
    </>
  );
};

const styles = StyleSheet.create({
  RestaurantDetailContainer: {
    backgroundColor: '#fff',
  },
  DividerStyle: {
    marginVertical: 10,
  },
});

export default RestaurantDetail;
