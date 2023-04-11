import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default function SinhalaNavigationCard({ text, image, onPress }) {
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
          <Text style={styles.textArea_text}>{text}</Text>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  textArea_text: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    fontWeight: 500,
    margin: '1%'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 125,
    marginLeft: 12,
    elevation: 10,
    width: 330,
    height: 320,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 40,
    elevation: 10,
  },
  button: {
    width: 330,
    height: 75,
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
