import {StyleSheet} from 'react-native';
import {responsiveSize} from './../../utils/Dimen';
import {actuatedNormalize} from './../../utils/Fontsize';
export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    margin: responsiveSize(10),
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveSize(20),
  },
  image: {
    height: responsiveSize(20),
    width: responsiveSize(20),
  },
  heading: {
    fontSize: actuatedNormalize(25),
    fontWeight: '900',
  },
  All: {
    fontSize: responsiveSize(15),
    padding: responsiveSize(10),
    fontWeight: '600',
  },
  imageview: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 40,
    padding: responsiveSize(8),
    borderColor: '#E5E5E5',
    marginRight: responsiveSize(20),
  },
});
