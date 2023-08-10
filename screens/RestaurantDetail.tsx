import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItem from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';

interface item {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

const itemData: item[] = [
  {
    id: 1,
    title: 'Lasagna',
    desc: 'With butter lettuce, tomato and sauce bechamel',
    price: '₹250',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: 2,
    title: 'Tandoori Chicken',
    desc: 'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '₹270',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Chilaquiles',
    desc: 'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '₹350',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: 4,
    title: 'Chicken Caesar Salad',
    desc: 'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '₹400',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: 5,
    title: 'Lasagna',
    desc: 'With butter lettuce, tomato and sauce bechamel',
    price: '₹450',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

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
        <MenuItem
          itemData={itemData}
          hideCheckBox={false}
          restaurantName={route.params?.name}
          IsMarginLeft={false}
        />
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
