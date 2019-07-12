import {StyleSheet} from 'react-native';
import {getWidthAndHeight} from '@utils/dimensions';
const sizeScreen = getWidthAndHeight();
import colors from '@constants/colors';
import fontSizes from '@constants/font-sizes';
const styles = StyleSheet.create({
  container: {
    width: sizeScreen.width / 2,
    height: sizeScreen.width / 2,
    borderRadius: sizeScreen.width / 4,
    borderWidth: 1,
    borderColor: colors.holderColor,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageLogo: {
    width: sizeScreen.width / 6, height: sizeScreen.width / 6
  },
  textStyle: {
    top: 5,
    fontSize: fontSizes.largeRegular,
    fontFamily: 'Sofia Pro',
  }
});
export default styles;
