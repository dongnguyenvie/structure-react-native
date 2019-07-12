import React from 'react';
import {View, TextInput, Text} from 'react-native';
import ButtonBorder from '../../buttonBorder'
import styles from './styles'
import Avatar from '@components/avatar';
import colors from '@constants/colors';
class CreateProfileFormStudent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {[styles.subContainer]}>
        <Text style = {styles.title}>Create Profile</Text>
        <Avatar styles={styles.avatar}/>
        <View style = {styles.textInputForm}>
          <Text style = {styles.titleInput}>Name</Text>
          <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.holderColor}
          placeholder={'First Last'} style = {styles.textInput}/>
          <Text style = {styles.titleInput}>Username</Text>
          <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.holderColor}
          placeholder={'Enter Username'} style = {styles.textInput}/>
          <Text style = {styles.titleInput}>Gender</Text>
          <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.holderColor}
          placeholder={'Select Gender'} style = {styles.textInput}/>
          <Text style = {styles.titleInput}>School</Text>
          <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.holderColor}
          placeholder={'Enter Name of School'} style = {styles.textInput}/>
          <Text style = {styles.titleInput}>Class Year</Text>
          <TextInput
          autoCorrect={false}
          placeholderTextColor={colors.holderColor}
          placeholder={'Enter Class Year'} style = {styles.textInput}/>
          <View style = {{top: 20}}>
          <ButtonBorder colorText={colors.white} title='Save Profile & Continue' styles={styles.buttonSubmit}/>
          </View>
        </View>
      </View>
    );
  }
}


export default CreateProfileFormStudent;