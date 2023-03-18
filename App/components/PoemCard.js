import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PoemCard({text1, text2, text3, name}) {
  return (
    <ImageBackground
      source={{
        uri: 'https://www.ppt-backgrounds.net/thumbs/children-powerpoint-template-to-educate-your-children--mutimedia---background.jpeg',
      }}
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
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
});
