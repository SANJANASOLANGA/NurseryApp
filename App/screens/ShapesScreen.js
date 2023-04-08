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
import {windowHeight, windowWidth} from '../constants/Dimensions';
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
        source={require('../assets/images/bg.jpg')}
        style={styles.screen}>
        <Text style={styles.heading}>SHAPES</Text>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.card_container}>
              <ShapesCard image={require('../assets/images/square.jpg')}  text='Square'/>
              <ShapesCard image={require('../assets/images/triangle.jpg')} text='Triangle' />
              <ShapesCard image={require('../assets/images/rectangle.jpg')} text='Rectangle'/>
              <ShapesCard image={require('../assets/images/circle.jpg')} text='Circle'/>
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
  },
  card_container: {
    marginBottom: '6%',
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
    marginBottom: '3%',
    alignSelf: 'flex-end'
  },
  heading: {
    fontSize: 33,
    marginTop: "10%",
    textAlign: 'center',
    color: '#54225e',
    fontWeight: 'bold',
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
