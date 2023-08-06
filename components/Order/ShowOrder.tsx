/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface IShowOrderProps {
  restaurantName: string;
  totalInd: number;
}

const ShowOrder = ({restaurantName, totalInd}: IShowOrderProps) => {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={{height: 100, alignSelf: 'center', marginBottom: 30}}
        source={require('../../assests/animations/cooking.json')}
        autoPlay
        loop={false}
        speed={0.5}
      />
      <Text>
        Your Order has been placed at {restaurantName} Restaurant for Total of{' '}
        {totalInd}
      </Text>

      <LottieView
        style={{height: 100, alignSelf: 'center', marginTop: 30}}
        source={require('../../assests/animations/cooking.json')}
      />
    </View>
  );
};

export default ShowOrder;
