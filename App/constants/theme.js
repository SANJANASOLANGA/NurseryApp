import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#eecdf7',
  secondary: '#cc79fc',
  accent: '#3498db',

  success: '#00C851',
  error: '#ff4444',

  black: '#171717',
  white: '#228257',
  background: '#eecdf7',
};

export const SIZES = {
  base: 10,
  width,
  height,
};
