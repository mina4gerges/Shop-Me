import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './Screens/Login';
import {Palette} from './Globals/Palette';
import AppLogo from './Components/Logo';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppLogo />
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
