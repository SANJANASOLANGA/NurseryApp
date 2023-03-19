import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default function NavigationCard({ text, image, onPress }) {
  return (
    <ImageBackground
      style={styles.card}
      source={image}
      imageStyle={{
        width: 350,
        height: 320,
        borderRadius: 50,
        marginLeft: 25,
        marginTop: 40,
        elevation: 10,
      }}>
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: 400,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 125,
    marginLeft: 12,
    elevation: 10,
  },
  button: {
    width: 350,
    height: 65,
    backgroundColor: '#eff3dd',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 350,
    elevation: 10,
  },
});
