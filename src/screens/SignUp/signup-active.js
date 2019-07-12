import React from 'react';
import {View, Image} from 'react-native';

import Container from '@components/container';
import Icon from '@components/icon';
import ButtonBorder from '@components/buttonBorder';
import LOGOKICKBACK from '../../thumbnails/logo_kickback.png';
import styles from './styles';
import {getWidthAndHeight} from '@utils/dimensions'

const {width} = getWidthAndHeight();

class SignUpActiveScreen extends React.Component {
  constructor(props) {
    super(props);
    this.email = 'firstlast@university.edu';
  }
  navigateToProfile(type){
    this.props.navigateToCreateProfile(this.props,{type});
  }
  render() {
    const mainText = `${this.email} has been activated!`;
    const subText = 'Please choose your account type:';
    const stylesSubText = {width: width};
    return (
      <Container>
        <View style={styles.halfViewTop}>
          <Image resizeMode='contain' style={styles.imageLogo} source={LOGOKICKBACK}/>
        </View>
        <View style={styles.halfViewEnd}>
          <Icon typeIcon={'check'} mainText={mainText} subText={subText} stylesSubText={stylesSubText}>
          <View style={styles.containerButton}>
          <ButtonBorder title={'Student'} styles={styles.button} onPress={() => {this.navigateToProfile('student')}} />
          <ButtonBorder title={'Alumi'} styles={styles.button} onPress={() => {this.navigateToProfile('alumi')}} />
          </View>
          <View style={styles.containerButtonRow}>
            <ButtonBorder title={'Organization / Club'} styles={[styles.button,styles.styleOrgButton]} onPress={ () => {this.navigateToProfile('organizations')}} />
          </View>
          </Icon>
        </View>
      </Container>
    );
  }
};

export default SignUpActiveScreen;