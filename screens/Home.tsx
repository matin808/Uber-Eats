import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default Home;
