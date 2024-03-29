import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../constants/Dimensions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={25} color= "#54225e"/>
      </View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#85568f"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    width: '90%',
    height: windowHeight / 15,
    borderColor: '#f5fffa',
    borderRadius: 13,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2e9f5',
    elevation: 3,
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#cdbcd1',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 24,
    color: '#54225e',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'KGPrimaryPenmanship2'
  },
  inputField: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
