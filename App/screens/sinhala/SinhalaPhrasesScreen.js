import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import Card2 from '../../components/card2';

const SinhalaPhrasesScreen = ({ navigation }) => {

  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Essential</Text>
      </View>
      <View style={styles.body}>
        <ScrollView horizontal={true}>
          <ScrollView>
            <Card2
              name={'message1'}
              text1={'Good Morning !            '}
              text2={'Good Morning !'}
              text3={'Have a Good Day !'}
            />
            <Card2
              name={'message1'}
              text1={'Good Afternoon !          '}
              text2={'  Good Afternoon !'}
              text3={'It is a Great Day !'}
            /></ScrollView><ScrollView>
            <Card2
              name={'message1'}
              text1={'Good Evening !           '}
              text2={'Good Evening !'}
              text3={'How is the Day !'}
            />
            <Card2
              name={'message1'}
              text1={'Good Night !               '}
              text2={'Good Night !'}
              text3={'  Sweet Dreams !'}
            /></ScrollView><ScrollView>
            <Card2
              name={'message1'}
              text1={'Thank You !                  '}
              text2={'          It is my Pleasure !'}
              text3={'Welcome !'}
            />
            <Card2
              name={'message1'}
              text1={'Get Well Soon !             '}
              text2={'    Thank you for '}
              text3={'your wish !'}
            /></ScrollView><ScrollView>
            <Card2
              name={'message1'}
              text1={'Hello, Nice to meet you !'}
              text2={'Nice to meet you too !'}
              text3={'How are you ?'}
            />
            <Card2
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
          onPress={() => navigation.navigate('SinhalaPhrasesQuiz')}
          style={styles.button}>
          <Text style={styles.btn_txt}>Activity</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SinhalaPhrasesScreen;

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
    flex: 0.8,
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
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    color: '#54225e',
    fontWeight: 'bold',
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
    fontSize: 20,
    color: 'white'
  },
});
