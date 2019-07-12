import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { navigateToLogin } from '../../actions/navigate';

class Home1 extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {{backgroundColor: 'green', flex:1}}>
        <TouchableOpacity 
        style = {{marginTop:50}}
        onPress={()=>{
          navigateToLogin(this.props);
          // this.props.navigator.toggleTabs({
          //   to: 'hidden',
          //   animate: true,
          // })
        }}><Text>HAHAHAHAH</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default Home1;