import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default function ShapesCard({text, image, onPress}) {
  return (
    <ImageBackground
      style={styles.card}
      source={image}
      imageStyle={{
        width: 350,
        height: 380,
        borderRadius: 15,
      }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dfedcb',
    width: 350,
    height: 380,
    borderRadius: 15,
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    elevation: 15,
  },
});
