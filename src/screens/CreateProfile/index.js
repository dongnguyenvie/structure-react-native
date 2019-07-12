import React from 'react';
import {View, Image, SafeAreaView} from 'react-native';

import Container from '@components/container';

import HEADERKICKBACK from '../../thumbnails/header_kickback.png';
import Header from '@components/header';

import CreateProfileFormStudent from '@components/createProfileForm/createProfileFormStudent';
import CreateProfileFormOrganizations from '@components/createProfileForm/createProfileFormOrganizations';

import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class CreateProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {type} = this.props;
    return (
      <Container>
        <Header noShadow={true} stylesHeader={styles.header}>
          <Image resizeMode='contain' style={styles.imageLogo} source={HEADERKICKBACK}/>
        </Header>
        <SafeAreaView style = {{flex: 1}}>
        <KeyboardAwareScrollView
        bounces={true}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="never">
        {type == 'organizations' ? <CreateProfileFormOrganizations/> : <CreateProfileFormStudent/> }
        </KeyboardAwareScrollView>
        </SafeAreaView>
      </Container>
    );
  }
};

export default CreateProfile;