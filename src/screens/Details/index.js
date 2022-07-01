/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {styles} from '../Details/style';
export default function DetailsScreen(props) {
  const {route} = props;
  const {price, category, description, title, image} = route.params;
  console.log('routes ', props);
  return (
    <SafeAreaView style={styles.mainView}>
      {/* <ImageBackground source={{uri: image}} style={styles.image}>
        <Image
          style={styles.back}
          source={require('./../../assets/images/back.png')}
        />
      </ImageBackground> */}

      <ImageBackground
        resizeMode="contain"
        source={{uri: image}}
        imageStyle={{
          resizeMode: 'stretch',
          width: '100%',
          height: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        style={styles.image}>
        <Pressable
          onPress={() => props.navigation.goBack()}
          style={styles.backButton}>
          <Image
            style={styles.back}
            source={require('./../../assets/images/back.png')}
          />
        </Pressable>
      </ImageBackground>

      {/* <View style={styles.backView}>
        <Image
          style={styles.back}
          source={require('./../../assets/images/back.png')}
        />
      </View>
      <Image source={{uri: image}} style={styles.image} /> */}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>Price: Rs {price}</Text>
      <Text style={styles.textDesc}> Description </Text>
      <Text style={styles.desc}>{description}</Text>
    </SafeAreaView>
  );
}
