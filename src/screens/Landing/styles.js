import {StyleSheet} from 'react-native';
import {getWidthAndHeight} from '@utils/dimensions';
import colors from '@constants/colors';
import fontSizes from '@constants/font-sizes';
const {width, height} = getWidthAndHeight();

const styles = StyleSheet.create({
  halfViewTop: {
    flex: 1,
    height:height/4,
    justifyContent: 'center',
    alignItems:'center'
  },
  halfViewLeft: {
    flexDirection: 'row',
    width:width,
  },
  imageBackground: {
      flex: 1,
      resizeMode:'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
  },
  imageLogo: {
    width: width * 4/ 6,
    top: -20,
    height: height /6
  },
  textIcon:{
    color:colors.white,
    fontSize: fontSizes.Regular,
    textAlign: 'center'
  },
  containerButton:{
    width: width/2,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom: 30,
  },
  imageButton:{
    width: 50,
    height:82
  },
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default styles;
