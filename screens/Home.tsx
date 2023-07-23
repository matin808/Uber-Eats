import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
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
const yelpApiKey =
  'LU26I_2vcjfBE_OEtZKtMY2dTaSgfEBEuUC8QebziRQq9xmtkFHfS00O-znwWFUjEEkcqrWwOUj6mb_oyzUKF9v3tJ9YxjkAnEOx0xzBGIkLaDoAlXA35KZ_dii9ZHYx';

const Home = () => {
  const [restaurantDetails, setRestaurantDetails] =
    React.useState(localRestaurants);

  const getRestaurantFromYelp = () => {
    return fetch(
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
        },
      },
    )
      .then(res => res.json())
      .then(res => setRestaurantDetails(res.businesses))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, []);

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
