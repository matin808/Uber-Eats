import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';

const image =
  'https://media-cdn.tripadvisor.com/media/photo-s/10/0d/be/cd/photo2jpg.jpg';

const title = 'FarmHouse Kitchen Thai Cuisine';

const description = 'Thai, - Comfort Food - $$ - 4.5 ⭐(500+)';
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
