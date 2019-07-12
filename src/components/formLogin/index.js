import React from 'react';
import {View, TextInput, Text} from 'react-native';
import ButtonBorder from '../buttonBorder'
import styles from './styles'
import colors from '@constants/colors';
class FormLogin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {styles.container}>
        <TextInput 
        autoCorrect={false}
        placeholderTextColor={colors.holderColor}
        placeholder={'Email (.EDU)'} style = {styles.textInput}/>
        <TextInput
        autoCorrect={false}
        placeholderTextColor={colors.holderColor}
        placeholder={'Password'} style = {[styles.textInput, {top: 30}]}/>
        <View style = {styles.frameContent}>
          <View style = {styles.frameButton}>
            <ButtonBorder title = 'Signup' styles={styles.styleButtonSignUp}/>
            <ButtonBorder colorText={colors.white} title = 'Login' styles={styles.styleButtonLogin}/>
          </View>
          <ButtonBorder title = 'Recover Password' styles={styles.textRecover}/>
        </View>
      </View>
    );
  }
}


export default FormLogin;