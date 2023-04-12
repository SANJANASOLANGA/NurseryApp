import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function SinhalaDescriptionCard({text1, image}) {
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
    fontSize: 30,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#54225e',
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
    height: 430,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
    marginTop: 70,
    backgroundColor: '#d29ffc',
    borderRadius: 15,
    elevation: 20,
    marginBottom: '0.5%'
  },
  card2: {
    width: 300,
    height: 90,
    backgroundColor: '#f8dcfc',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
