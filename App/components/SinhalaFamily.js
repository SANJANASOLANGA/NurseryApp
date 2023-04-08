import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function SinhalaFamilyCard({text1, text2, image}) {
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
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
    height: 470,
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
    justifyContent: 'space-around',
    alignContent:'center'
  },
});
