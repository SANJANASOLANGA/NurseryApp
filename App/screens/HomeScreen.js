import React, { useContext } from 'react';
import {
  ImageBackground,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import NavigationCard from '../components/NavigationCard';
import SinhalaNavigationCard from '../components/SinhalaNavigationCard';

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.safearea}>
      {/* <Image
        style={styles.logo}
        source={require('../assets/images/logo.png')}
      /> */}
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.heading}>Let's Start Your Learning Journey !</Text>
      <Text />
      <Text />
      <ScrollView>
      <ScrollView horizontal={true}>
        <NavigationCard
          text={"Are you ready to learn English? Let's Go !"}
          image={require('../assets/images/english.jpg')}
          onPress={() => navigation.navigate('EnglishScreen')}
        />
        <NavigationCard
          text={"Are you ready to learn maths? Let's Go !"}
          image={require('../assets/images/maths.jpg')}
          onPress={() => navigation.navigate('MathsScreen')}
        />
        <NavigationCard
          text={"Are you ready to learn creativities? Let's Go !"}
          image={require('../assets/images/crafts.jpg')}
          onPress={() => navigation.navigate('CreativeScreen')}
        />
        <NavigationCard
          text={"Are you ready to learn about community? Let's Go !"}
          image={require('../assets/images/communityMain.png')}
          onPress={() => navigation.navigate('CommunityScreen')}
        />
        <SinhalaNavigationCard
          text={"පුංචි අපේ මව්බස"}
          image={require('../assets/images/sinhalaActivity.jpg')}
          onPress={() => navigation.navigate('SinhalaScreen')}
        />
        <SinhalaNavigationCard
          text={"පුංචි අපේ ගණිතය"}
          image={require('../assets/images/mathsMain.png')}
          onPress={() => navigation.navigate('SinhalaMathsScreen')}
        />
        <SinhalaNavigationCard
          text={"පුංචි අපේ හැඩ වැඩ"}
          image={require('../assets/images/creativeMain.png')}
          onPress={() => navigation.navigate('SinhalaCreativeScreen')}
        />
        <SinhalaNavigationCard
          text={"පුංචි අපේ පාඩම්"}
          image={require('../assets/images/comMain.png')}
          onPress={() => navigation.navigate('SinhalaCommunityScreen')}
        />
      </ScrollView></ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  scrollview: {
    flex: 4,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 45,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginLeft: 320,
  },
  text: {
    fontSize: 34,
    textAlign: 'right',
    marginRight: 28,
    marginBottom: 30,
    fontWeight: '500',
    color: '#54225e',
    fontFamily:'KGPrimaryPenmanship2',
    marginTop: "3%"
  },
  heading: {
    fontSize: 44,
    textAlign: 'center',
    color: '#54225e',    
    fontFamily:'KGPrimaryPenmanship2',
    marginLeft: '3%',
    marginRight: '3%'
  },
});
