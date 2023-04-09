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
      <Text style={styles.heading}>Let's Start Your</Text>
      <Text style={styles.heading}>Learning Journey !</Text>
      <Text />
      <Text />
      <ScrollView horizontal={true}>
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/english.jpg')}
          onPress={() => navigation.navigate('EnglishScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/maths.jpg')}
          onPress={() => navigation.navigate('MathsScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/crafts.jpg')}
          onPress={() => navigation.navigate('CreativeScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/social.jpg')}
          onPress={() => navigation.navigate('CommunityScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/sinhalaActivity.jpg')}
          onPress={() => navigation.navigate('EnglishScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/maths.jpg')}
          onPress={() => navigation.navigate('MathsScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/crafts.jpg')}
          onPress={() => navigation.navigate('CreativeScreen')}
        />
        <NavigationCard
          text={"Let's Go !"}
          image={require('../assets/images/social.jpg')}
          onPress={() => navigation.navigate('CommunityScreen')}
        />
      </ScrollView>
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
    fontSize: 28,
    textAlign: 'right',
    marginRight: 28,
    marginBottom: 30,
    fontWeight: '500',
    color: '#54225e',
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    color: '#54225e',
    fontWeight: 'bold',
  },
});
