/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import MenuItem from '../restaurantDetail/MenuItem';
import firestore from '@react-native-firebase/firestore';
// import MenuItem from '../components/restaurantDetail/MenuItem';

interface IShowOrderProps {
  restaurantName: string;
  totalInd: number;
}

const ShowOrder = ({restaurantName, totalInd}: IShowOrderProps) => {
  // const [cartItemData, setCartItemData] = React.useState<any>({
  //   items: [
  //     {
  //       id: 1,
  //       title: 'Bologna',
  //       desc: 'With butter lettuce, tomato and sauce bechamel',
  //       price: '$13.50',
  //       image:
  //         'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection('orders')
  //     .orderBy('createdAt', 'desc')
  //     .limit(1)
  //     .onSnapshot(snapshot => {
  //       snapshot.docs.map(doc => {
  //         setCartItemData(doc.data());
  //       });
  //     });
  //   return () => unsubscribe();
  // }, []);
  // console.log(cartItemData?.items);
  return (
    <View>
      <LottieView
        style={{
          height: 100,
          marginVertical: 30,
        }}
        autoPlay
        source={require('../../assests/animations/check-mark.json')}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginHorizontal: 15}}>
        Your order at {restaurantName} has been placed for {totalInd}
      </Text>
    </View>
  );
};

export default ShowOrder;
