import {StyleSheet, Dimensions} from 'react-native';

import colors from '@constants/colors';
import fontSizes from '@constants/font-sizes';

const {width, height} = Dimensions.get('window');

// const margin = width * 0.03;
// const sidePadding = width * 0.05;
// const topPadding = width * 0.09;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  halfViewTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  halfViewBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  subModal: {
    width: width * 3 / 4,
    backgroundColor: colors.white,
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    color: colors.red,
    fontSize: fontSizes.title
  }
});
