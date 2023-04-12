import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function DescriptionCard({text1, text2, image}) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={{
          width: 300,
          height: 260,
          marginTop: 50,
          borderRadius: 15,
        }}
      />
      <View style={styles.card2}>
        <Text style={styles.text2}>{text1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginTop: 70,
  },
  text2: {
    fontSize: 37,
    textAlign: 'left',
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  card: {
    width: 360,
    height: 450,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    marginTop: 70,
    backgroundColor: '#d29ffc',
    borderRadius: 15,
    elevation: 20,
  },
  card2: {
    width: 300,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
