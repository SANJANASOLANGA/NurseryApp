import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import Slider_Num from '../../stores/Slider_Num2';
export default class SinhalaNumbersScreen extends Component {
  constructor() {
    super();
  }

  NavigateToMath = () => {
    this.props.navigation.navigate('MathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNumQuiz = () => {
    this.props.navigation.navigate('NumbersQuiz');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>ඉලක්කම් ඉගෙන ගනිමු</Text>
        </View>
        <View style={styles.body}>
          <Slider_Num />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.NavigateToMath} style={styles.button}>
            <Text style={styles.btn_txt}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.NavigateToNumQuiz}
            style={styles.button}>
            <Text style={styles.btn_txt}>Activity</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginBottom: '3%',
    alignSelf: 'flex-end'
  },
  heading: {
    fontSize: 30,
    marginTop: "10%",
    textAlign: 'center',
    marginBottom: 20,
    color: '#54225e',
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#8a36d1',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
  },
  btn_txt: {
    fontSize: 20,
    color:'white'
  },
});
