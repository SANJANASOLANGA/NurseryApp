import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ColorsQuiz from '../stores/ColorsQuiz';
import ShapesQuiz from '../stores/ShapesQuiz';
import NumbersQuiz from '../stores/NumbersQuiz';
import PhrasesQuiz from '../stores/PhrasesQuiz';
import AlphabetQuiz from '../stores/AlphabetQuiz';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

  function ActivityStack({navigation}) {
    // const {user, logout} = useContext(AuthContext);
    return (
      <Stack.Navigator initialRouteName="ActivityScreen">
        <Stack.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
        <Stack.Screen
          name="AlphabetQuiz"
          component={AlphabetQuiz}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
        <Stack.Screen
          name="PhrasesQuiz"
          component={PhrasesQuiz}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
        <Stack.Screen
          name="NumbersQuiz"
          component={NumbersQuiz}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
        <Stack.Screen
          name="ShapesQuiz"
          component={ShapesQuiz}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
        <Stack.Screen
          name="ColorsQuiz"
          component={ColorsQuiz}
          options={() => ({
            headerTitle: '',
            // headerLeft: () => (
            //   <NavigationDrawerStructure navigationProps={navigation} />
            // ),
            headerStyle: {
              backgroundColor: '#b1d2c7',
            },
          })}
        />
      </Stack.Navigator>
    );
  }

  export default TabStack;