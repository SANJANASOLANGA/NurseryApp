import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Card2({text1, text2, text3, name}) {
  return (
    <View style={styles.card}>
      <View style={styles.card2}>
        <View>
          <AntDesign name={name} size={25} />
        </View>
        <Text style={styles.text}>{text1}</Text>
      </View>
      <View style={styles.card3}>
        <Text style={styles.text2}>{text2}</Text>
        <Text style={styles.text3}>{text3}</Text>
        <View style={styles.vector}>
          <AntDesign name={name} size={25} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    padding: 10,
  },
  text2: {
    fontSize: 25,
    marginTop: 15,
  },
  text3: {
    fontSize: 25,
    padding: 10,
    marginLeft: 60,
  },
  card: {
    width: 360,
    height: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    backgroundColor: '#dfedcb',
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
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 25,
  },
});
