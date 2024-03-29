import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import EnglishPhrases from '../components/EnglishPhrases';

const PhrasesScreen = ({ navigation }) => {

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Essential Phrases</Text>
      </View>
      <View style={styles.body}>
        <ScrollView horizontal={true}>
          <ScrollView>
            <EnglishPhrases
              name={'message1'}
              text1={'Good Morning !            '}
              text2={'Good Morning !'}
              text3={'Have a Good Day !'}
            />
            <EnglishPhrases
              name={'message1'}
              text1={'Good Afternoon !          '}
              text2={'  Good Afternoon !'}
              text3={'It is a Great Day !'}
            /></ScrollView><ScrollView>
            <EnglishPhrases
              name={'message1'}
              text1={'Good Evening !           '}
              text2={'Good Evening !'}
              text3={'How is the Day !'}
            />
            <EnglishPhrases
              name={'message1'}
              text1={'Good Night !               '}
              text2={'Good Night !'}
              text3={'  Sweet Dreams !'}
            /></ScrollView><ScrollView>
            <EnglishPhrases
              name={'message1'}
              text1={'Thank You !                  '}
              text2={'          It is my Pleasure !'}
              text3={'Welcome !'}
            />
            <EnglishPhrases
              name={'message1'}
              text1={'Get Well Soon !             '}
              text2={'    Thank you for '}
              text3={'your wish !'}
            /></ScrollView><ScrollView>
            <EnglishPhrases
              name={'message1'}
              text1={'Hello, Nice to meet you !'}
              text2={'Nice to meet you too !'}
              text3={'How are you ?'}
            />
            <EnglishPhrases
              name={'message1'}
              text1={'I am Sorry !                '}
              text2={'            It is Ok !'}
              text3={'         No Harm.'}
            /></ScrollView>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EnglishScreen')}
          style={styles.button}>
          <Text style={styles.btn_txt}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PhrasesQuiz')}
          style={styles.button}>
          <Text style={styles.btn_txt}>Activity</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default PhrasesScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginTop: 20,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '1%',
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: 40,
    marginTop: "6%",
    textAlign: 'center',
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#8a36d1',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
  },
  btn_txt: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'KGPrimaryPenmanship2',
  },
});
