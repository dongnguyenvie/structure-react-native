import React from 'react';
import {View, TextInput, Text} from 'react-native';
import ButtonBorder from '../../buttonBorder'
import styles from './styles'
import Avatar from '@components/avatar';
import colors from '@constants/colors';
class CreateProfileFormOrganizations extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {[styles.subContainer]}>
        <Text style = {styles.title}>Create Profile</Text>
        <Avatar styles={styles.avatar}/>
        <View style = {styles.content}>
          <View style = {styles.textInputForm}>
            <Text style = {styles.titleInput}>Name</Text>
            <TextInput
            autoCorrect={false}
            placeholderTextColor={colors.holderColor}
            placeholder={'Name of Organization / Club'} style = {styles.textInput}/>
            <Text style = {styles.titleInput}>First Last</Text>
            <TextInput
            autoCorrect={false}
            placeholderTextColor={colors.holderColor}
            placeholder={'Enter Username'} style = {styles.textInput}/>
          </View>
          <ButtonBorder colorText={colors.white} title='Save Profile & Continue' styles={styles.buttonSubmit}/>
        </View>
      </View>
    );
  }
}


export default CreateProfileFormOrganizations;