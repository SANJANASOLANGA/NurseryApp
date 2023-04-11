import React, {useEffect} from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
    GoogleSignin.configure({
      webClientId:
        '992403560552-o3gr7lhmmmb6dm28k2ior483rfkk03er.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}
      screenOptions={{
        headerTransparent: true
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: 'Sign Up',
          headerTintColor: '#54225e',
          headerStyle: {
            backgroundColor: 'transparent',
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="chevron-left"
                size={23}
                backgroundColor="transparent"
                color="#54225e"
                marginLeft={5}
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
