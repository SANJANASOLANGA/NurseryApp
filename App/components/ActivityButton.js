import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../constants/Dimensions';

const ActivityButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default ActivityButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    width: '75%',
    height: windowHeight / 11,
    backgroundColor: '#faecbf',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
