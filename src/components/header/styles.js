import {StyleSheet, Dimensions} from 'react-native';

import colors from '@constants/colors';
import fontSizes from '@constants/font-sizes';

const {width, height} = Dimensions.get('window');

const margin = width * 0.03;
const sidePadding = width * 0.05;
const topPadding = width * 0.09;

export default StyleSheet.create({
  container: {
    width,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 4,
    marginBottom: margin
  },
  containerNoShadow: {
    width,
  },
  headerContainer: {
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blueOcean,
    flexDirection: 'row',
    paddingTop: topPadding,
    paddingLeft: sidePadding,
    paddingRight: sidePadding,
  },
  headerText: {
    color: colors.darkBlue,
    fontSize: fontSizes.regular,
    fontWeight: '400'
  },
  secondaryHeaderText: {
    fontSize: fontSizes.small,
    fontWeight: '400',
    minWidth: 35,
  },
  cancelText: {
    color: colors.cancel
  },
  doneText: {
    color: colors.done
  }
});
