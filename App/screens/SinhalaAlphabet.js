import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { windowHeight, windowWidth } from '../constants/Dimensions';

import SinhalaDescriptionCard from '../components/SinhalaDescriptionCard';

const SinhalaAlphabet = ({ navigation }) => {

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.main}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text}>සිංහල හෝඩිය ඉගෙන ගනිමු</Text>
        </View>
        <ScrollView horizontal={true}>
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/tier.jpeg')}
            text1={'ට - ටයරය'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/wade.jpeg')}
            text1={'ව - වඩේ'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/flower.jpeg')}
            text1={'ම - මල'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/goat.jpeg')}
            text1={'එ - එළුවා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/duk.png')}
            text1={'ඩ - duk.JPG'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/boat.jpg')}
            text1={'ඔ - ඔරුව'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/mango.jpeg')}
            text1={'ඹ - අඹ'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/dog.jpg')}
            text1={'බ - බල්ලා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/lamp.jpg')}
            text1={'ප - පහන'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/water.jpg')}
            text1={'ජ - ජලය'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/child.jpg')}
            text1={'ද - දරුවා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/mom.png')}
            text1={'අ - අම්මා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/tree.jpeg')}
            text1={'ග - ගස'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/swan.jpeg')}
            text1={'හ - හංසයා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/key.jpg')}
            text1={'ය - යතුර'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/bf.jpeg')}
            text1={'ස - සමනළයා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/rambutan.jpg')}
            text1={'ර - රඹුටන්'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/arrow.jpg')}
            text1={'ඊ - ඊතලය'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/broom.jpeg')}
            text1={'ඉ - ඉදල'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/hoe.jpeg')}
            text1={'උ - උදැල්ල'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/rope.jpeg')}
            text1={'ල - ලණුව'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/boy.jpeg')}
            text1={'ළ - ළමයා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/fox.jpeg')}
            text1={'න - නරියා'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/star.jpg')}
            text1={'ත - තරුව'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/scissor.jpg')}
            text1={'ක - කතුර'}
          />
          <SinhalaDescriptionCard

            image={require('../assets/images/sinhala/anaya.jpg')}
            text1={'ණ - ඇණය'}
          />
        </ScrollView>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EnglishScreen')}
            style={styles.button}>
            <Text style={styles.btn_txt}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AlphabetQuiz')}
            style={styles.button}>
            <Text style={styles.btn_txt}>Activity</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SinhalaAlphabet;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
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
    marginBottom: '3%',
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginTop: "7%",
  },
  buttonContainer: {
    width: '40%',
    height: windowHeight / 15,
    backgroundColor: '#faecbf',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
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
