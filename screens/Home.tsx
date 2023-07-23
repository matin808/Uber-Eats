import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
import {localRestaurants} from '../components/RestaurantItems';
interface restaurantDetailProps {
  name: string;
  image_url: string;
  categories: string[];
  price: string;
  reviews: number;
  rating: number;
}

const Home = () => {
  const [restaurantDetails, setRestaurantDetails] =
    React.useState(localRestaurants);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantDetails={restaurantDetails} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
