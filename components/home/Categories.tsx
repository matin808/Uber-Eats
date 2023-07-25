import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../../assests/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assests/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assests/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assests/images/fast-food.png'),
    text: 'Fast Foods',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 5,
        marginRight: 5,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        flex: 1,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                marginLeft: 15,
                // justifyContent: 'center',
                // alignSelf: 'center',
                alignItems: 'center',
                // marginRight: 5,
              }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
              <Text style={{fontWeight: '900', fontSize: 13, marginTop: 10}}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
