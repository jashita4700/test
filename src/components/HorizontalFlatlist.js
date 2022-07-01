import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {responsiveSize} from '../utils/Dimen';
import {actuatedNormalize} from '../utils/Fontsize';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Electronics',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Mobile',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Sports',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d70',
    title: 'Accessory',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29',
    title: 'Extras',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HorizontalFlatlist = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: responsiveSize(15),
    marginTop: responsiveSize(25),
  },
  item: {
    backgroundColor: 'white',
    paddingLeft: responsiveSize(16),
    paddingRight: responsiveSize(16),
    paddingTop: responsiveSize(10),
    paddingBottom: responsiveSize(10),
    marginVertical: responsiveSize(8),
    marginHorizontal: responsiveSize(5),
    borderRadius: responsiveSize(15),
    borderColor: '#E5E5E5',
    borderWidth: 1,
  },
  title: {
    fontSize: 12,
  },
});

export default HorizontalFlatlist;
