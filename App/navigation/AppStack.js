import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';

const Tab = createBottomTabNavigator();
function TabStack(){
// const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#000000aa',
          style: {
            backgroundColor: '#faa692',
            height: 50,
          },
        }}>
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="script-text"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  export default TabStack;