import React from 'react';
import {View, Image, Text} from 'react-native';
import Container from '@components/container';
import FormLogin from '@components/formLogin';
import LOGOKICKBACK from '../../thumbnails/logo_kickback.png';
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <KeyboardAwareScrollView
        bounces={false}
        extraScrollHeight={100}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="never">
        <View style = {[styles.halfViewTop]}>
          <Image resizeMode='contain' style={styles.imageLogo} source={LOGOKICKBACK}/>
        </View>
        <View style = {styles.halfViewEnd}>
          <FormLogin/>
        </View>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
};

export default LoginScreen;