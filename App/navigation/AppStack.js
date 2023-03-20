import { Provider as PaperProvider } from 'react-native-paper'
import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from '../screens/DrawerContent';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ColorsQuiz from '../stores/ColorsQuiz';
import ShapesQuiz from '../stores/ShapesQuiz';
import NumbersQuiz from '../stores/NumbersQuiz';
import PhrasesQuiz from '../stores/PhrasesQuiz';
import AlphabetQuiz from '../stores/AlphabetQuiz';
import ColorsScreen from '../screens/ColorsScreen';
import ShapesScreen from '../screens/ShapesScreen';
import AlphabetScreen from '../screens/AlphabetScreen';
import NumbersScreen from '../screens/NumbersScreen';
import PhrasesScreen from '../screens/PhrasesScreen';
import PoemsScreen from '../screens/PoemsScreen';
import MyFamScreen from '../screens/MyFamScreen';
import SchoolScreen from '../screens/SchoolScreen';
import EnglishScreen from '../screens/EnglishScreen'
import MathsScreen from '../screens/MathsScreen';
import CreativeScreen from '../screens/CreativeScreen';
import CommunityScreen from '../screens/CommunityScreen';
import AboutScreen from '../screens/About';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialCommunityIcons
          name="reorder-horizontal"
          color="black"
          size={30}
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      // screenOptions={{
      //   activeTintColor: '#fff',
      //   inactiveTintColor: '#000000aa',
      //   headerShown:false,
      //   style: {
      //     backgroundColor: '#faa692',
      //     height: 50,
      //   },
      // }}
      screenOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'yellow',
        headerShown: false,
        headerTransparent: true,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            position: 'absolute',
            height:70,
            left: 10,
            right: 10,
            bottom: 20,
            height: 80
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" 
            color={color} size={size} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" 
            color={color} size={size} 
            />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Activity',
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

const HomeScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AlphabetScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="EnglishScreen"
        component={EnglishScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="MathsScreen"
        component={MathsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="NumbersScreen"
        component={NumbersScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShapesScreen"
        component={ShapesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PhrasesScreen"
        component={PhrasesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ColorsScreen"
        component={ColorsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PoemsScreen"
        component={PoemsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="MyFamScreen"
        component={MyFamScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="CreativeScreen"
        component={CreativeScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddMarksScreen"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ActivityScreenStack"
        component={ActivityStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const AlphabetScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="AlphabetScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="AlphabetScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const PhrasesScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="PhrasesScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="PhrasesScreen"
        component={PhrasesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const NumbersScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="NumbersScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="NumbersScreen"
        component={NumbersScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ShapesScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="ShapesScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="ShapesScreen"
        component={ShapesScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ColorsScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="ColorsScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="ColorsScreen"
        component={ColorsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const PoemsScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="PoemsScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="PoemsScreen"
        component={PoemsScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const MyFamScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="MyFamScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="MyFamScreen"
        component={MyFamScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const SchoolScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="SchoolScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SchoolScreen"
        component={SchoolScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={AlphabetScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddMarksScreen"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

function ActivityStack({navigation}) {
  // const {user, logout} = useContext(AuthContext);
  return (
    <Stack.Navigator 
      initialRouteName="ActivityScreen" 
      screenOptions={{
        headerTransparent: true,
      }}  
    >
      <Stack.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AlphabetQuiz"
        component={AlphabetQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="PhrasesQuiz"
        component={PhrasesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="NumbersQuiz"
        component={NumbersQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ShapesQuiz"
        component={ShapesQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ColorsQuiz"
        component={ColorsQuiz}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <PaperProvider>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          activeTintColor: '#faa08c',
          itemStyle: {marginVertical: 10},
          backgroundColor: '#eeeed1',
          headerTransparent: true,
          headerShown: false,
          inactiveBackgroundColor:'transparent',
          // drawerActiveBackgroundColor: "transparent",
          drawerIcon: true,
          headerTransparent: true,
          // drawerStyle: { backgroundColor: 'transparent'}
        }}
          
      >
        <Drawer.Screen name="HomeScreenDrawer" component={HomeScreenStack} />
        <Drawer.Screen
          name="ProfileScreenDrawer"
          component={ProfileScreenStack}
        />
        <Drawer.Screen
          name="AlphabetScreenDrawer"
          component={AlphabetScreenStack}
        />
        <Drawer.Screen
          name="PhrasesScreenDrawer"
          component={PhrasesScreenStack}
        />
        <Drawer.Screen
          name="NumbersScreenDrawer"
          component={NumbersScreenStack}
        />
        <Drawer.Screen
          name="ShapesScreenDrawer"
          component={ShapesScreenStack}
        />
        <Drawer.Screen
          name="ColorsScreenDrawer"
          component={ColorsScreenStack}
        />
        <Drawer.Screen name="PoemsScreenDrawer" component={PoemsScreenStack} />
        <Drawer.Screen name="MyFamScreenDrawer" component={MyFamScreenStack} />
        <Drawer.Screen
          name="SchoolScreenDrawer"
          component={SchoolScreenStack}
        />
        <Drawer.Screen name="ActivityScreenDrawer" component={ActivityStack} />
        <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      </Drawer.Navigator>
    </PaperProvider>
  );
};

export default App;