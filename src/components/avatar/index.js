import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import colors from '@constants/colors';
import stylesAvatar from './styles';
import CAMERAICON from '../../thumbnails/camera.png';
const Avatar = (props) => {
  const {
    title = 'Add Photo',
    colorText = colors.holderColor,
    onPress,
    styles = {width: 100, height: 100}
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style = {[stylesAvatar.container, styles]}>
      <Image resizeMode='contain' style={[styles.imageLogo, {width: styles.width / 4, height: styles.width / 4}]} source={CAMERAICON}/>
      <Text style={[stylesAvatar.textStyle, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}


export default Avatar;