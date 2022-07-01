/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import {responsiveSize} from '../utils/Dimen';

const Item = props => (
  <Pressable style={styles.item} onPress={() => props.onPress(props)}>
    <Image
      source={{uri: props.image}}
      style={{
        width: 90,
        height: 90,
        resizeMode: 'stretch',
        borderRadius: 10,
        alignSelf: 'center',
      }}
    />
    <Text style={styles.title}>{props.title}</Text>
  </Pressable>
);

const Fetching = props => {
  console.log('props', props);
  const [products, setProducts] = useState([]);

  const renderItem = ({item}) => {
    console.log('item===>', item);
    return (
      <Item
        onPress={item => props.navigation.navigate('Details', {...item})}
        {...item}
      />
    );
  };
  const fetchProduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log('datat=> ', data);
        setProducts(data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    console.log('Products ', products);
  }, [products]);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginTop: 10,
        }}
        columnWrapperStyle={{
          justifyContent: 'center',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    width: 163,
    height: 180,
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: responsiveSize(20),
    justifyContent: 'center',
  },
  title: {
    marginTop: responsiveSize(10),
    fontSize: 11,
  },
});
export default Fetching;
