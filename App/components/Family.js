import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function FamilyCard({text1, text2, image}) {
  return (
    <View style={styles.card}>
      <Image
        source={image}
        style={{
          width: 300,
          height: 290,
          marginTop: 50,
          borderRadius: 15,
        }}
      />
      <View style={styles.card2}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 15,
    marginTop: 15,
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
    height: 520,
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
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});
