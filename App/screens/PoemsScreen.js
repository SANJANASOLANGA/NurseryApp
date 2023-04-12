import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';


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
          <FlatList
            horizontal={true}
            data={poems}
            renderItem={({ item }) => (
              <ImageBackground
                source={require('../assets/images/poems.png')}
                imageStyle={{ borderRadius: 15, width: 375, height: 560 }}
                style={styles.card}
              >
                <Text style={styles.text1}>{item.topic}</Text>
                <View style={styles.card2}>
                  <Text style={styles.text2}>{item.body}</Text>
                </View>
                <Text style={styles.text3}>{item.author}</Text>
              </ImageBackground>
            )}
          />
        </View>
      </ScrollView>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreativeScreen')}
            style={styles.button}>
            <Text style={styles.btn_txt}> Menu</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: '20%',
  },
  text: {
    fontSize: 40,
    marginTop: '10%',
    textAlign: 'center',
    marginBottom: 20,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
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
    marginRight:'30%'
  },
  btn_txt: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  text1: {
    fontSize: 30,
    marginTop: 70,
    fontFamily: 'comicz',
    color: '#54225e'
  },
  text2: {
    fontSize: 26,
    textAlign: 'justify',
    marginLeft: 15,
    marginRight: 15,
    fontFamily: 'comici',
    color: 'purple',
  },
  text3: {
    fontSize: 20,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    marginLeft: 150,
    marginTop: 60,
    color: '#300240',
    fontFamily: 'comicz',
  },
  card: {
    width: 375,
    height: 560,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 25,
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    elevation: 10,
  },
  card2: {
    width: 335,
    height: 330,
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
});
