import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SchoolCard({text1, text2, image}) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={{
          width: 300,
          height: 270,
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
    fontSize: 36,
    textAlign: 'left',
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  text3: {
    fontSize: 25,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    marginBottom: 15,
    marginLeft: 150,
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
    backgroundColor: '#eecdf7',
    borderRadius: 15,
    elevation: 10,
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
