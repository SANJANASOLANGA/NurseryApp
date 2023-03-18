import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Card({text, main, onPress, name}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'none'}>
      <View style={styles.card}>
        <View style={styles.vector}>
          <AntDesign name={name} size={45} />
        </View>
        <Text style={styles.text}>{main}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  vector: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6,
  },
  card: {
    width: 180,
    height: 260,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 10,
  },
});
