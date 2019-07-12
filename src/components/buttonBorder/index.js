import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import stylesButton from './styles';
import colors from '@constants/colors';
const ButtonBorder = (props) => {
  const {
    title = '',
    onPress,
    styles = {},
    colorText = colors.black
  } = props;
  return (
    <TouchableOpacity onPress={onPress} style = {[stylesButton.container, styles]}>
      <Text style={[stylesButton.textStyle, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}


export default ButtonBorder;