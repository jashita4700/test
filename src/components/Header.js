/* eslint-disable no-unused-vars */
import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  Stylesheet,
  View,
} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}> Secondhand </Text>
      <View style={styles.imageview}>
        <Image
          style={styles.image}
          source={require('./../../assets/images/Vector.png')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    
});
