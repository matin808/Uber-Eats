import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import {localRestaurants} from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import {Divider} from 'react-native-elements';
interface restaurantDetailProps {
  name: string;
  image_url: string;
  categories: string[];
  price: string;
  reviews: number;
  rating: number;
}
const yelpApiKey =
  '3aGVxgwUz5WIwgJL102wVPfqVljV_sqz-Gt9h18chdNo8__azYbxHzfEWcHa8n-C9WKnXq4I-s0O-6Yid7S2VhxfcywxqpKNbaeiTXbBmmAEz_g0ccMET0MDf1--ZHYx';

const Home = ({navigation}: any) => {
  const [restaurantDetails, setRestaurantDetails] =
    React.useState(localRestaurants);
  // for active tab
  const [activeTab, setActiveTab] = React.useState<string>('Delivery');

  // for search input
  const [searchInput, setSearchInput] = React.useState('SanDiego');

  const getRestaurantFromYelp = () => {
    if (searchInput.length === 0) setSearchInput('SanDiego');
    console.log(searchInput);
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${searchInput}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${yelpApiKey}`,
        },
      },
    )
      .then(res => res.json())
      .then(res =>
        setRestaurantDetails(
          res.businesses.filter((business: any) =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        ),
      )
      .catch(error => console.log(error));
  };

  useEffect(() => {
    if (searchInput.length > 4) getRestaurantFromYelp(); // for saving API call limit
    // getRestaurantFromYelp();
  }, [searchInput]);

  useEffect(() => {
    getRestaurantFromYelp();
  }, [activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#fff', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantDetails={restaurantDetails}
          navigation={navigation}
        />
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
