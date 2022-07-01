/* eslint-disable no-unused-vars */
import {StyleSheet} from 'react-native';
import {responsiveSize} from './../../utils/Dimen';
import {actuatedNormalize} from './../../utils/Fontsize';
export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '40%',
    marginBottom: responsiveSize(20),
  },
  title: {
    fontSize: responsiveSize(15),
    fontWeight: '500',
    marginBottom: responsiveSize(15),
    marginHorizontal: responsiveSize(20),
  },
  desc: {
    fontSize: responsiveSize(12),
    // fontWeight: '500',
    marginBottom: responsiveSize(20),
    marginHorizontal: responsiveSize(20),
    color: '#848080',
  },
  price: {
    fontSize: responsiveSize(22),
    color: '#6D4FB8',
    fontWeight: '700',
    marginBottom: responsiveSize(25),
    marginHorizontal: responsiveSize(20),
  },
  textDesc: {
    fontSize: responsiveSize(15),
    fontWeight: '600',
    marginHorizontal: responsiveSize(20),
    marginBottom: responsiveSize(10),
  },
  back: {
    height: 16,
    width: 16,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 5,
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 40,
    padding: responsiveSize(14),
    backgroundColor: 'grey',
  },
});
