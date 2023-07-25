import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const bottomTabsData = [
  {
    name: 'Home',
    icon: 'home-sharp',
  },
  {
    name: 'Browse',
    icon: 'search-sharp',
  },
  {
    name: 'Grocery',
    icon: 'basket-sharp',
  },
  {
    name: 'Orders',
    icon: 'receipt-sharp',
  },
  {
    name: 'Account',
    icon: 'person-sharp',
  },
];

const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        borderRadius: 10,
        marginHorizontal: 10,
      }}>
      {bottomTabsData.map((item, index) => (
        <BottomTab key={index} title={item.name} iconName={item.icon} />
      ))}
    </View>
  );
};

const BottomTab = ({title, iconName}: any) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
      }}>
      <TouchableOpacity>
        <Ionicons style={{alignSelf: 'center'}} name={iconName} size={25} />
        <Text
          style={{
            color: 'gray',
            fontWeight: 'bold',
            marginTop: 2,
            alignSelf: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;
