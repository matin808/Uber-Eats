import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';

// const yelpRestaurantInfo = {
//   name: 'FarmHouse Kitchen Thai Cuisine',
//   image:
//     'https://media-cdn.tripadvisor.com/media/photo-s/10/0d/be/cd/photo2jpg.jpg',
//   price: '$$',
//   reviews: '1500',
//   rating: 4.5,
//   categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
// };

// const {name, price, image, reviews, rating, categories} = yelpRestaurantInfo;

// const formattedCategories = categories.map((cat: any) => cat.title).join(' . ');

const About = ({route}: any) => {
  const {params} = route;
  console.log(params?.categories);

  let categoriesArray: any = [];

  for (let i = 0; i < params?.categories.length; i++) {
    categoriesArray.push(params?.categories[i].title);
  }

  // console.log(categoriesArray);
  categoriesArray = categoriesArray.join(' . ');

  const description = `${categoriesArray} ${
    params?.price ? '. ' + params?.price : ' '
  } . 🎫 . ${params?.rating} ⭐ (${params?.reviews ? params?.reviews : 100})`;
  return (
    <View>
      <RestaurantImage image={params?.image} />
      <RestaurantTitle title={params?.name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export const RestaurantImage = (props: {image: string}) => (
  <View>
    <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
  </View>
);

export const RestaurantTitle = (props: {title: string}) => (
  <View style={{marginTop: 8, marginHorizontal: 15}}>
    <Text style={{fontSize: 29, fontWeight: '600'}}>{props.title}</Text>
  </View>
);

export const RestaurantDescription = (props: {description: string}) => (
  <Text
    style={{
      fontSize: 15.5,
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
    }}>
    {props.description}
  </Text>
);

export default About;
