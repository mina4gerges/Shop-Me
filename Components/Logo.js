import React from 'react';
import {Image, StyleSheet} from 'react-native';

const AppLogo = () => {
  return (
    <Image
      style={styles.tinyLogo}
      source={require('../assets/images/logo.png')}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default AppLogo;
