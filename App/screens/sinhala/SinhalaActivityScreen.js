import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import ActivityButton from '../../components/ActivityButton';

const SinhalaActivityScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.safearea}>
      <Text style={styles.heading}>ක්‍රියාකාරකම්</Text>
      <View style={styles.button_container}>
        <ActivityButton
          buttonTitle="සිංහල හෝඩිය"
          onPress={() => navigation.navigate('AlphabetQuiz')}
        />
        <ActivityButton
          buttonTitle="කෙටි දෙබස්"
          onPress={() => navigation.navigate('PhrasesQuiz')}
        />
        <ActivityButton
          buttonTitle="ඉලක්කම්"
          onPress={() => navigation.navigate('NumbersQuiz')}
        />
        <ActivityButton
          buttonTitle="හැඩ"
          onPress={() => navigation.navigate('ShapesQuiz')}
        />
        <ActivityButton
          buttonTitle="පාට"
          onPress={() => navigation.navigate('ColorsQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default SinhalaActivityScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 34,
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
