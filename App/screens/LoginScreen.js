import React, {useContext, useState} from 'react';
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  ScrollView,
  Image, ImageBackground
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const {login, googleLogin, fbLogin} = useContext(AuthContext);
  const {login, googleLogin} = useContext(AuthContext);

  const checkLogin = () =>{
    login(email, password)
  }

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.container}>
    {/* <ScrollView contentContainerStyle={styles.container}> */}
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-no-background.png')}
      />
      <Text style={styles.text}>Sign In</Text>
      <Text />
      <Text />

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign In"
        // onPress={() => login(email, password)}
        onPress={checkLogin}
      />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          {/* <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#bfd4e7"
            onPress={() => fbLogin()}
          /> */}

          {/* <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#bfd4e7"
            onPress={() => googleLogin()}
          /> */}
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
      </ImageBackground>
    // </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    paddingTop: 60,
    paddingBottom: 100,
    backgroundColor: 'red',
  },
  logo: {
    width: 85,
    height: 65,
    marginTop: '10%'
  },
  text: {
    fontSize: 35,
    marginTop: '10%',
    color: "#54225e",
    fontFamily:'KGPrimaryPenmanship2',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
    color: "#54225e",
  },
  navButtonText: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 15,
    color: "#54225e",
    fontFamily:'KGPrimaryPenmanship2'
  },
});
