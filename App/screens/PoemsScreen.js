import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { windowHeight, windowWidth } from '../constants/Dimensions';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

import PoemCard from '../components/PoemCard';

const PoemsScreen = ({ navigation }) => {
  const [poems, setPoems] = useState([]);

  const getPoems = async () => {
    const subscriber = firestore()
      .collection('EnglishPoems')
      .onSnapshot(querySnapshot => {
        const poems = [];
        console.log('querySnapshot' + querySnapshot);
        querySnapshot.forEach(documentSnapshot => {
          poems.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setPoems(poems);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }

  useEffect(() => {
    getPoems()
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.text}>Little Poems</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <FlatList
              data={poems}
              renderItem={({ item }) => (
                <ImageBackground
                  source={
                    {
                      uri: 'https://images.pexels.com/photos/3527786/pexels-photo-3527786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }
                  }
                  imageStyle={{ borderRadius: 15, width: windowWidth - 30, height: 500 }}
                  style={styles.card}>
                  <Text style={styles.text1}>{item.topic}</Text>
                  <View style={styles.card2}>
                    <Text style={styles.text2}>{item.body}</Text>
                  </View>
                  <Text style={styles.text3}>{item.author}</Text>
                </ImageBackground>
              )}
            />
            <PoemCard
              text1={'The Crocodile'}
              text2={
                'How doth the little crocodile\nImprove his shining tail,\nAnd pour the waters of the Nile\nOn every golden scale!\nHow cheerfully he seems to grin,\nHow neatly spreads his claws,\nAnd welcomes little fishes in,\nWith gently smiling jaws!'
              }
              text3={'Lewis Carroll'}
            />
            <PoemCard
              text1={'The Purple Cow'}
              text2={
                'I never saw a purple cow,               I never hope to see one,               But I can tell you, anyhow,            I’d rather see than be one!'
              }
              text3={'Gelett Burgess'}
            />
            <PoemCard
              text1={'Hey Diddle Diddle'}
              text2={
                'Hey diddle diddle,                          The Cat and the fiddle,                 The Cow jumped over the moon,                                           The little Dog laughed to see such sport,                                    And the Dish ran away with the Spoon.'
              }
              text3={'Author Unknown'}
            />
            <PoemCard
              text1={'Twinkle, Twinkle, Little Star'}
              text2={
                'Twinkle, twinkle, little star,            How I wonder what you are.                      Up above the world so high,            Like a diamond in the sky.            Twinkle, twinkle, little star,            How I wonder what you are!'
              }
              text3={'Jane Taylor'}
            />
            <PoemCard
              text1={'Star Light, Star Bright'}
              text2={
                'Star light, start bright,                The first star I see tonight;             I wish I may, I wish I might,            Have the wish I wish tonight.'
              }
              text3={'Author Unknown'}
            />
          </ScrollView>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreativeScreen')}
            style={styles.button}>
            <Text style={styles.btn_txt}> Menu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default PoemsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginLeft: 250,
    marginTop: 20,
    marginBottom: 15,
  },
  text: {
    fontSize: 33,
    marginTop: '5%',
    textAlign: 'center',
    marginBottom: 20,
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
  text1: {
    fontSize: 30,
    marginTop: 70,
    fontWeight: '500',
  },
  text2: {
    fontSize: 26,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: '300',
  },
  text3: {
    fontSize: 20,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    marginLeft: 150,
    fontStyle: 'italic',
    marginTop: 60,
    color: 'white'
  },
  card: {
    width: 375,
    height: 500,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 25,
    backgroundColor: '#dfedcb',
    borderRadius: 15,
    elevation: 10,
  },
  card2: {
    width: 335,
    height: 270,
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
});
