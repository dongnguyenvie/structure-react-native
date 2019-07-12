import {StyleSheet} from 'react-native';
import {getWidthAndHeight} from '@utils/dimensions'
const {width, height} = getWidthAndHeight();
import colors from '@constants/colors';
import fontSizes from '@constants/font-sizes';
const widthTextInput = width - (width * 1/6);
const styles = StyleSheet.create({
  buttonSubmit: {
    marginTop: 50,
    width: widthTextInput - (width * 1/6),
    backgroundColor: colors.black,
  },
  textInputForm: {
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
  titleInput: {
    marginTop: 20,
    width: widthTextInput,
    fontSize: fontSizes.regular,
    color: colors.holderDarkColor,
    fontFamily: 'Sofia Pro',
  },
  title: {
    fontSize: fontSizes.title,
    fontFamily: 'Sofia Pro',
    marginBottom: 20
  },
  subContainer: {
    paddingTop: 10,
    alignItems: 'center'
  },
  imageLogo: {
    width: width * 0.5,
    height: 25
  },
  avatar: {
    width: width * 3 / 7,
    height: width * 3 / 7
  },
});
export default styles;
