import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import ActivityButton from '../components/ActivityButton';

const HomeActivities = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.safearea}>
      <Text style={styles.heading}>Fun Activities</Text>
      <View style={styles.button_container}>
        <ActivityButton
          buttonTitle="Alphabet"
          onPress={() => navigation.navigate('AlphabetQuiz')}
        />
        <ActivityButton
          buttonTitle="Phrases"
          onPress={() => navigation.navigate('PhrasesQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default HomeActivities;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 35,
    marginTop: '10%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#54225e',
    fontWeight: 'bold',
  },
  button_container: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
});
