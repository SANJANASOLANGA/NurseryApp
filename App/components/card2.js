import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Card2({text1, text2, text3, name}) {
  return (
    <View style={styles.card}>
      <View style={styles.card2}>
        <View>
          <AntDesign name={name} size={22} color={'#54225e'}/>
        </View>
        <Text style={styles.text}>{text1}</Text>
      </View>
      <View style={styles.card3}>
        <Text style={styles.text2}>{text2}</Text>
        <Text style={styles.text3}>{text3}</Text>
        <View style={styles.vector}>
          <AntDesign name={name} size={22} color={'#54225e'}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    padding: 10,
    fontFamily: 'KGPrimaryPenmanship2',
    color: '#54225e'
  },
  text2: {
    fontSize: 15,
    marginTop: 15,
    fontFamily: 'KGPrimaryPenmanship2',
    color: '#54225e',
    padding: 10,
  },
  text3: {
    fontSize: 15,
    padding: 10,
    marginLeft: 60,
    fontFamily: 'KGPrimaryPenmanship2',
    color: '#54225e'
  },
  card: {
    width: 360,
    height: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: '#c055e0',
    borderRadius: 15,
    elevation: 10,
  },
  card2: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    marginTop: 50,
    marginRight: 25,
  },
  card3: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
});
