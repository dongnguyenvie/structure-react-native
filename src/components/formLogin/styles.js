import {StyleSheet} from 'react-native';
import {getWidthAndHeight} from '@utils/dimensions'
const {width, height} = getWidthAndHeight();
import colors from '@constants/colors';
import fontSizes from '../../constants/font-sizes';
const widthTextInput = width * 4/ 6;
const styles = StyleSheet.create({
  container: {
    width: widthTextInput,
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    width: widthTextInput,
    borderBottomColor: colors.holderColor,
    borderBottomWidth: 1,
    height: 40,
    fontFamily: 'Sofia Pro',
    fontSize: fontSizes.largeRegular,
    alignItems: 'center'
  },
  frameContent: {
    marginTop: 70,
    width: widthTextInput,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50,
    alignItems: 'center'
  },
  frameButton: {
    width: widthTextInput,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  styleButtonLogin: {
    backgroundColor: 'black',
    width: widthTextInput/2 - 10
  },
  styleButtonSignUp: {
    width: widthTextInput/2 - 10
  },
  textRecover: {
    borderRadius: 0,
    borderWidth: 0,
    fontFamily: 'Sofia Pro',
    marginTop: 30,
    fontSize: fontSizes.largeRegular
  }
});
export default styles;
