import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
// import {AuthContext} from '../navigation/AuthProvider';
import {windowHeight, windowWidth} from '../constants/Dimensions';

import DescriptionCard from '../components/DescriptionCard';

const AlphabetScreen = ({navigation}) => {
  // const {user, logout} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../assets/images/background2.jpg')}
      style={styles.main}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text}>Let's Learn Alphabet</Text>
        </View>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <DescriptionCard
              image={require('../assets/images/A.jpg')}
              text1={'A for Apple'}
            />
            <DescriptionCard
              image={require('../assets/images/B.jpg')}
              text1={'B for Bird'}
            />
            <DescriptionCard
              image={require('../assets/images/C.jpg')}
              text1={'C for Crab'}
            />
            <DescriptionCard
              image={require('../assets/images/D.jpg')}
              text1={'D for Dog'}
            />
            <DescriptionCard
              image={require('../assets/images/E.jpg')}
              text1={'E for Elephant'}
            />
            <DescriptionCard
              image={require('../assets/images/F.jpg')}
              text1={'F for Fox'}
            />
            <DescriptionCard
              image={require('../assets/images/G.jpg')}
              text1={'G for Giraffe'}
            />
            <DescriptionCard
              image={require('../assets/images/H.jpg')}
              text1={'H for Horse'}
            />
            <DescriptionCard
              image={require('../assets/images/I.jpg')}
              text1={'I for Iguana'}
            />
            <DescriptionCard
              image={require('../assets/images/J.jpg')}
              text1={'J for Jelly'}
            />
            <DescriptionCard
              image={require('../assets/images/K.jpg')}
              text1={'K for Kangaroo'}
            />
            <DescriptionCard
              image={require('../assets/images/L.jpg')}
              text1={'L for Lion'}
            />
            <DescriptionCard
              image={require('../assets/images/M.jpg')}
              text1={'M for Monkey'}
            />
            <DescriptionCard
              image={require('../assets/images/O.jpg')}
              text1={'O for Owl'}
            />
            <DescriptionCard
              image={require('../assets/images/P.jpg')}
              text1={'P for Penguin'}
            />
            <DescriptionCard
              image={require('../assets/images/Q.jpg')}
              text1={'Q for Queen'}
            />
            <DescriptionCard
              image={require('../assets/images/R.jpg')}
              text1={'R for Rabbit'}
            />
            <DescriptionCard
              image={require('../assets/images/S.jpg')}
              text1={'S for Sheep'}
            />
            <DescriptionCard
              image={require('../assets/images/T.jpg')}
              text1={'T for Turtle'}
            />
            <DescriptionCard
              image={require('../assets/images/U.jpg')}
              text1={'U for Umbrella'}
            />
            <DescriptionCard
              image={require('../assets/images/V.jpg')}
              text1={'V for Vulture'}
            />
            <DescriptionCard
              image={require('../assets/images/W.jpg')}
              text1={'W for Whale'}
            />
            <DescriptionCard
              image={require('../assets/images/X.jpg')}
              text1={'X for Xiphias'}
            />
            <DescriptionCard
              image={require('../assets/images/Y.jpg')}
              text1={'Y for Yak'}
            />
            <DescriptionCard
              image={require('../assets/images/Z.jpg')}
              text1={'Z for Zebra'}
            />
          </ScrollView>
        </View>
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

export default AlphabetScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    marginTop: 20,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 100,
    marginTop: 20,
  },
  text: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
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
    backgroundColor: '#bfebce',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
  },
  btn_txt: {
    fontSize: 20,
  },
});
