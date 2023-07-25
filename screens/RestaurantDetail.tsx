import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItem from '../components/restaurantDetail/MenuItem';

const RestaurantDetail = () => {
  return (
    <>
      <About />
      <Divider width={1.8} style={{marginVertical: 10}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuItem />
      </ScrollView>
    </>
  );
};

export default RestaurantDetail;
