import React from 'react';
import {ImageBackground, View, StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Card({main, image, onPress}) {
  return (
    <ImageBackground
      style={styles.card}
      source={image}
      imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
    >
      <View>
        <TouchableHighlight
          underlayColor={'white'}
          style={styles.button}
          onPress={onPress}>
          <Text style={styles.textArea_text}>{main}</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textArea_text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '12%',
    elevation: 10,
    width: 320,
    height: 320,
    borderRadius: 50,
    marginTop: '10%',
    elevation: 10,
  },
  button: {
    width: 320,
    height: 65,
    backgroundColor: '#c055e0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 350,
    elevation: 10,
  },
});
