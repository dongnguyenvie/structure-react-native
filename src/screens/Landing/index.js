import React from 'react';
import {StyleSheet, ImageBackground,Image, View,TouchableOpacity, Text} from 'react-native';
import { navigateToLogin } from '../../actions/navigate';
import BACKGROUND from '../../thumbnails/bg-landing.png'; 
import LOGOKICKBACK from '../../thumbnails/logo-kickback-white.png';
import ICONMEDIA from '../../thumbnails/ico-media-white.png';
import ICONPAGE from '../../thumbnails/ico-page-white.png';
import styles from './styles';
class LandingScreen extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        style={{flex: 1,
          resizeMode:'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center'}}
        source={BACKGROUND}
      >
        <View style={styles.halfViewTop}>
          <Image resizeMode='contain' style={styles.imageLogo} source={LOGOKICKBACK}/>
        </View>
        <View style={styles.halfViewLeft}>
          <View style={styles.containerButton}>
            <TouchableOpacity 
            style = {{marginTop:50}}
            onPress={()=>{
              navigateToLogin(this.props);
            }}>
              <Image resizeMode='contain' style={styles.imageButton} source={ICONMEDIA}/>
              <Text style={styles.textIcon}>Media</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity 
            style = {{marginTop:50}}
            onPress={()=>{
              navigateToLogin(this.props);
            }}>
              <Image resizeMode='contain' style={styles.imageButton} source={ICONPAGE}/>
              <Text style={styles.textIcon}>Page</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default LandingScreen;