import React from 'react';
import {View, Image} from 'react-native';

import Container from '@components/container';
import Icon from '@components/icon';
import ButtonBorder from '@components/buttonBorder';
import LOGOKICKBACK from '../../thumbnails/logo_kickback.png';
import styles from './styles';
import {getWidthAndHeight} from '@utils/dimensions'

const {width} = getWidthAndHeight();

class SignUpAfterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.email = 'firstlast@university.edu';
  }
  render() {
    const mainText = `An email has been sent to ${this.email}`;
    const subText = 'Please click the verification link to login to Kickback.';
    const styleButton = {borderWidth: 2,top: 30,borderRadius: 10};
    const stylesSubText = {width: width * 0.9};
    return (
      <Container>
        <View style = {styles.halfViewTop}>
          <Image resizeMode='contain' style={styles.imageLogo} source={LOGOKICKBACK}/>
        </View>
        <View style = {styles.halfViewEnd}>
          <Icon typeIcon={'letter'} mainText={mainText} subText={subText} stylesSubText={stylesSubText}>
          <ButtonBorder title={'Back to Login'} styles={styleButton} />
          </Icon>
        </View>
      </Container>
    );
  }
};

export default SignUpAfterScreen;