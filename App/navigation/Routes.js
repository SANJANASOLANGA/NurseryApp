/* eslint-disable react-hooks/exhaustive-deps */
/*import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import SplashScreen from '../screens/splash';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const authStackChanged = user => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(authStackChanged);
    return subscriber;
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack'; 

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}

export default Routes;
