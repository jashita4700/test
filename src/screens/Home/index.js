/* eslint-disable no-unused-vars */
import React from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './style';
import HorizontalFlatlist from '../../components/HorizontalFlatlist';
import FlatlistApi from '../../components/FlatlistApi';
import Fetching from '../../components/FlatlistApi';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <HorizontalFlatlist />
      <Text style={styles.All}>All products</Text>
      <Fetching navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
