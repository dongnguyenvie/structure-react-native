import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import ButtonBorder from '@components/buttonBorder';
import { dismissLightBox } from '@actions/navigate';

const WarningBox = (props) => {
  const onPress = () => dismissLightBox(props);
  return (
    <View style = {styles.container}>
      <View style = {styles.subModal}>
        <Text style = {styles.title}>Error</Text>
        <View style = {styles.halfViewTop}>
          <Text style = {styles.subTitle}>{props.message}</Text>
        </View>
        <View style = {styles.halfViewBottom}>
          <ButtonBorder onPress = {onPress} title = 'Okay!'/>
        </View>
      </View>
    </View>
  );
}
export default WarningBox;