import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../constants/Dimensions';

const SinhalaActivityButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default SinhalaActivityButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    width: '75%',
    height: windowHeight / 9,
    backgroundColor: '#8a36d1',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight:'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
});
