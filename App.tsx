/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {Text, useColorScheme, View} from 'react-native';

import RootNavigation from './Navigation';
import RestaurantDetail from './screens/RestaurantDetail';

function App(): JSX.Element {
  return (
    // <RootNavogation />
    <View style={{flex: 1}}>
      {/* <Home /> */}
      {/* <RestaurantDetail /> */}
      <RootNavigation />
    </View>
  );
}

export default App;
