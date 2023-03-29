import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default function PoemCard({text1, text2, text3, name}) {
  return (
    <ImageBackground
      source={
{        uri: 'https://images.pexels.com/photos/3527786/pexels-photo-3527786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}        // uri: 'https://www.pexels.com/photo/photo-of-purple-paint-3527786/',
        // require('../assets/images/poem2.jpeg')
      }
      imageStyle={{borderRadius: 15, width: 375, height: 500}}
      style={styles.card}>
      <Text style={styles.text}>{text1}</Text>
      <View style={styles.card2}>
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <Text style={styles.text3}>{text3}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
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
