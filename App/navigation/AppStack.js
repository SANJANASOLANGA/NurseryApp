import { Provider as PaperProvider } from 'react-native-paper'
import React, { useContext } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { DrawerContent } from '../screens/DrawerContent';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import EditProfileScreen from '../screens/EditProfileScreen';
import AddMarkscreen from '../screens/AddMarksScreen';
import SinhalaAlphabet from '../screens/SinhalaAlphabet';
import SinhalaNumbersScreen from '../screens/sinhala/SinhalaNumbersScreen';
import SinhalaColorsScreen from '../screens/sinhala/SinhalaColorsScreen';
import SinhalaPhrasesScreen from '../screens/sinhala/SinhalaPhrasesScreen';
import SinhalaShapesScreen from '../screens/sinhala/SinhalaShapesScreen';
import SinhalaPoemsScreen from '../screens/sinhala/SinhalaPoemsScreen';
import SinhalaMyFamScreen from '../screens/sinhala/SinhalaMyFamScreen';
import SinhalaSchoolScreen from '../screens/sinhala/SinhalaSchoolScreen';
import SinhalaActivityScreen from '../screens/sinhala/SinhalaActivityScreen';
import HomeActivities from '../screens/HomeActivities';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialCommunityIcons
          name="reorder-horizontal"
          color="black"
          size={30}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: '#c055e0',
        tabBarInactiveTintColor: '#54225e',
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: [
          {
            backgroundColor: '#faedfc'
          },
          null
        ],
      })}
    >
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
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
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home"
              color={color} size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeActivities"
        component={HomeActivities} // methanata danna one sinhala english activity 2ma thiyana eka
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
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

const HomeScreenStack = ({ navigation }) => {
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
      {/* <Stack.Screen
        name="SinhalaAlphabet"
        component={SinhalaAlphabet}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      /> */}
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
        component={AddMarkscreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
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

const AlphabetScreenStack = ({ navigation }) => {
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

const PhrasesScreenStack = ({ navigation }) => {
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

const NumbersScreenStack = ({ navigation }) => {
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

const ShapesScreenStack = ({ navigation }) => {
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

const ColorsScreenStack = ({ navigation }) => {
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

const PoemsScreenStack = ({ navigation }) => {
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

const MyFamScreenStack = ({ navigation }) => {
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

const SchoolScreenStack = ({ navigation }) => {
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

const ProfileScreenStack = ({ navigation }) => {
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
        component={EditProfileScreen}
        options={() => ({
          headerTitle: '',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="AddMarksScreen"
        component={AddMarkscreen}
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

function ActivityStack({ navigation }) {
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

function SinhalaActivityStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaActivityScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaActivityScreen"
        component={SinhalaActivityScreen}
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

const SinhalaAlphabetScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaAlphabet"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaAlphabet"
        component={SinhalaAlphabet}
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

const SinhalaPharasesScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaPhrasesScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaPhrasesScreen"
        component={SinhalaPhrasesScreen}
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

const SinhalaNumbersScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaNumbersScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaNumbersScreen"
        component={SinhalaNumbersScreen}
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
const SinhalaShapesScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaShapesScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaShapesScreen"
        component={SinhalaShapesScreen}
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
const SinhalaColorsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaColorsScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaColorsScreen"
        component={SinhalaColorsScreen}
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
const SinhalaPoemsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaPoemsScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaPoemsScreen"
        component={SinhalaPoemsScreen}
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
}; const SinhalaFamilyScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaMyFamScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaMyFamScreen"
        component={SinhalaMyFamScreen}
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
const SinhalaScoolScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SinhalaSchoolScreen"
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="SinhalaSchoolScreen"
        component={SinhalaSchoolScreen}
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

const App = () => {
  return (
    <PaperProvider>
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          activeTintColor: '#faa08c',
          itemStyle: { marginVertical: 10 },
          backgroundColor: '#eeeed1',
          headerTransparent: true,
          headerShown: false,
          inactiveBackgroundColor: 'transparent',
          drawerIcon: true,
          headerTransparent: true,
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
        <Drawer.Screen name="SinhalaActivityDrawer" component={SinhalaActivityStack} />
        <Drawer.Screen name="AboutScreen" component={AboutScreen} />

        <Drawer.Screen
          name="SinhalaAlphabetScreenStack"
          component={SinhalaAlphabetScreenStack}
        />

        <Drawer.Screen
          name="SinhalaPharasesScreenStack"
          component={SinhalaPharasesScreenStack}
        />

        <Drawer.Screen
          name="SinhalaNumbersScreenStack"
          component={SinhalaNumbersScreenStack}
        />

        <Drawer.Screen
          name="SinhalaShapesScreenStack"
          component={SinhalaShapesScreenStack}
        />

        <Drawer.Screen
          name="SinhalaColorsScreenStack"
          component={SinhalaColorsScreenStack}
        />

        <Drawer.Screen
          name="SinhalaPoemsScreenStack"
          component={SinhalaPoemsScreenStack}
        />

        <Drawer.Screen
          name="SinhalaFamilyScreenStack"
          component={SinhalaFamilyScreenStack}
        />

        <Drawer.Screen
          name="SinhalaScoolScreenStack"
          component={SinhalaScoolScreenStack}
        />
      </Drawer.Navigator>
    </PaperProvider>
  );
};

export default App;