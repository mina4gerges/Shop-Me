import React, {useState} from 'react';
import {Button, Text} from 'native-base';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import {Palette} from '../Globals/Palette';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Login Account</Text>
      <TextInput
        style={styles.textInput}
        autoCompleteType={'username'}
        autoFocus={true}
        textContentType={'username'}
        placeholder="UserName"
        onChangeText={(text) => setUserName(text)}
        defaultValue={userName}
      />
      <TextInput
        style={styles.textInput}
        autoCompleteType={'password'}
        textContentType={'password'}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        defaultValue={password}
      />

      <View>
        <Button style={styles.buttonLogin} bordered>
          <Text style={styles.loginText}>Log In</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    color: 'red',
    fontSize: 12,
  },
  container: {
    width: 300,
    height: 500,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  textInput: {
    height: 40,
    width: 200,
    padding: 10,
    textAlign: 'center',
    borderRadius: 30,
    borderColor: Palette.primaryColor,
    borderWidth: 1,
  },
  loginText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  buttonLogin: {
    borderColor: Palette.primaryColor,
    backgroundColor: Palette.secondColor,
    borderRadius: 30,
    height: 40,
  },
});

export default Login;
