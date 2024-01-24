import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in successfully!');
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          console.log('Invalid email or password!');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.ImgeContainer}>
        <Image source={require('../assets/mylogo.png')} style={styles.image} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
          style={styles.input}
          placeholder="Enter your email"
        />
        <TextInput
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          style={styles.input}
          placeholder="Enter your Password"
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#5c93fa',
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 22,
            marginTop: 18,
            width: '80%',
            alignItems: 'center',
          }}>
          <Text onPress={() => handleLogin()} style={{color: 'white'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ImgeContainer: {
    marginTop: '30%',
    height: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingLeft: 22,
    height: 50,
  },
});

export default Login;
