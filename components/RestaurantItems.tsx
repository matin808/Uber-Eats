import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

interface restaurantDetailProps {
  name?: string;
  image_url?: string;
  categories?: string[];
  price?: string;
  reviews?: number;
  rating?: number;
}
// type resDet = restaurantDetailProps[];

const RestaurantItems = ({restaurantDetails}: any) => {
  return (
    <View>
      {restaurantDetails.map(
        (restaurant: restaurantDetailProps, index: any) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              style={{marginBottom: 2}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  marginTop: 10,
                  borderRadius: 15,
                }}>
                <RestaurantImage image={restaurant.image_url} />
                <RestaurantInfo
                  name={restaurant.name}
                  rating={restaurant.rating}
                />
              </View>
            </TouchableOpacity>
          );
        },
      )}
    </View>
  );
};

interface imageProps {
  image: string;
}
const RestaurantImage = ({image}: any) => {
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 15,
          right: 13,
        }}>
        <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

interface InfoProps {
  name: string;
  rating: number;
}

const RestaurantInfo = ({name, rating}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{name}</Text>
        <Text
          style={{
            marginTop: 5,
            marginLeft: 2,
            color: 'lightgray',
            fontWeight: '800',
          }}>
          35 - 40 min
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          marginTop: -10,
          alignSelf: 'center',
          borderRadius: 17,
          paddingHorizontal: 8,
          paddingVertical: 8,
        }}>
        <Text style={{fontSize: 15}}>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
