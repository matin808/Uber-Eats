import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItems = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 2}}>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginTop: 10,
          borderRadius: 15,
        }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = () => {
  return (
    <>
      <Image
        source={{
          uri: 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
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

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          FarmHouse Kichen Thai Causine
        </Text>
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
        <Text style={{fontSize: 15}}>4.5</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
