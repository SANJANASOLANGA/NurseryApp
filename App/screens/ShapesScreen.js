import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import ShapesCard from '../components/shapesCard';

export default class ShapesScreen extends Component {
  NavigateToMath = () => {
    this.props.navigation.navigate('MathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToShapesQuiz = () => {
    this.props.navigation.navigate('ShapesQuiz');
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <Text style={styles.heading}>SHAPES</Text>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <Text style={styles.card_text}>Square</Text>
              <ShapesCard image={require('../assets/images/square.jpg')} />
              <Text style={styles.card_text}>Triangle</Text>
              <ShapesCard image={require('../assets/images/triangle.jpg')} />
              <Text style={styles.card_text}>Rectangle</Text>
              <ShapesCard image={require('../assets/images/rectangle.jpg')} />
              <Text style={styles.card_text}> Circle</Text>
              <ShapesCard image={require('../assets/images/circle.jpg')} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.NavigateToMath} style={styles.button}>
            <Text style={styles.btn_txt}> Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.NavigateToShapesQuiz}
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
  body: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  card_container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 30,
    marginLeft: 115,
  },
  heading: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  card_text: {
    fontSize: 33,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  button: {
    width: 120,
    height: 50,
    backgroundColor: '#bfebce',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
  },
  btn_txt: {
    fontSize: 20,
  },
});
