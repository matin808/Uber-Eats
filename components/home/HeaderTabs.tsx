import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const HeaderTabs = ({activeTab, setActiveTab}: any) => {
  // const [activeTab, setActiveTab] = useState<string>('Delivery');

  return (
    <View style={styles.headerTabContainer}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

interface HeaderButtonProps {
  title: string;
  activeTab: any;
  setActiveTab: any;
}

const HeaderButton = ({title, activeTab, setActiveTab}: HeaderButtonProps) => {
  return (
    <TouchableOpacity onPress={() => setActiveTab(title)}>
      <View
        style={[
          styles.headerBtnContainer,
          {
            backgroundColor: title === activeTab ? 'black' : 'white',
          },
        ]}>
        <Text
          style={[
            styles.headerTabs_Text,
            {color: title === activeTab ? 'white' : 'black'},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headerTabContainer: {
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },

  headerTabs_Text: {
    fontSize: 15,
    fontWeight: '900',
  },

  headerBtnContainer: {
    padding: 4,
    paddingRight: 15,
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderRadius: 10,
  },
});

export default HeaderTabs;
