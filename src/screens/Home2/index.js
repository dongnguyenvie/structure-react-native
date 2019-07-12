import React from 'react';
import {StyleSheet, View} from 'react-native';

class Home2 extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style = {{backgroundColor: 'yellow', flex:1}}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default Home2;