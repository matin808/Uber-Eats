import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SearchBar = ({searchInput, setSearchInput}: any) => {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <View style={{marginLeft: 10, position: 'absolute', zIndex: 1, top: 16}}>
        <Ionicons name="location-sharp" size={24} />
      </View>
      <TextInput
        style={{
          backgroundColor: '#eee',
          borderRadius: 20,
          fontWeight: '700',
          marginTop: 7,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 10,
          width: '100%',
          height: 45,
          padding: 8,
          paddingLeft: 40,
        }}
        // value={searchInput}
        placeholder="Enter location"
        onChangeText={text => setSearchInput(text)}
      />
      <View
        style={{
          marginRight: 10,
          backgroundColor: 'white',
          padding: 6,
          borderRadius: 20,
          flexDirection: 'row',
          gap: 5,
          position: 'absolute',
          zIndex: 1,
          paddingRight: 12,
          right: 0,
          top: 14,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name="clock-time-four-outline" size={20} />
        <Text style={{fontWeight: '700'}}>Search</Text>
      </View>
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        query={{key: 'AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4'}}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              backgroundColor: 'white',
              padding: 10,
              borderRadius: 20,
              flexDirection: 'row',
              gap: 5,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="clock-time-four-outline" size={20} />
            <Text style={{fontWeight: '700'}}>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
};

export default SearchBar;
