import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

const hitSlop = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20
};
const Header = (props) => {
  const {
    mainText,
    leftText,
    leftAction,
    rightText,
    rightAction,
    noShadow,
    stylesHeader = {}
  } = props;
  const containerStyles = noShadow ? styles.containerNoShadow : styles.container;
  return (
    <View style={containerStyles}>
      <View style={[styles.headerContainer, stylesHeader]}>
        <TouchableOpacity hitSlop={hitSlop} onPress={leftAction}>
          <Text style={[styles.secondaryHeaderText, styles.cancelText]}>{leftText}</Text>
        </TouchableOpacity>
        {mainText ? <Text style={styles.headerText}>{mainText}</Text> : null}
        {props.children}
        <TouchableOpacity hitSlop={hitSlop} onPress={rightAction}>
          <Text style={[styles.secondaryHeaderText, styles.doneText]}>{rightText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

Header.propTypes = {
  mainText: PropTypes.string,
  leftText: PropTypes.string,
  leftAction: PropTypes.func,
  rightText: PropTypes.string,
  rightAction: PropTypes.func,
  noShadow: PropTypes.bool,
};
