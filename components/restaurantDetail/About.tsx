import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';

const image =
  'https://media-cdn.tripadvisor.com/media/photo-s/10/0d/be/cd/photo2jpg.jpg';

const title = 'FarmHouse Kitchen Thai Cuisine';
const description = 'Thai, - Comfort Food - $$ - 4.5 stars(500+) - 0.2 miles';
const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
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
  <View style={{margin: 8}}>
    <Text style={{fontSize: 28, fontWeight: '900'}}>{props.title}</Text>
  </View>
);

export const RestaurantDescription = (props: {description: string}) => (
  <View style={{marginHorizontal: 8, marginVertical: 5}}>
    <Text style={{fontSize: 15, fontWeight: '700'}}>{props.description}</Text>
  </View>
);

export default About;
