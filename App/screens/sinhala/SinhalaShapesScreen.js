import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import ShapesCard from '../../components/shapesCard';

export default class SinhalaShapesScreen extends Component {
  NavigateToMath = () => {
    this.props.navigation.navigate('SinhalaMathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToShapesQuiz = () => {
    this.props.navigation.navigate('SinhalaShapesQuiz');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <Text style={styles.heading}>හැඩ තල හුරුව</Text>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.card_container}>
              <ShapesCard image={require('../../assets/images/square.jpg')}  text='සමචතුරස්‍රය'/>
              <ShapesCard image={require('../../assets/images/triangle.jpg')} text='ත්‍රිකෝණය' />
              <ShapesCard image={require('../../assets/images/rectangle.jpg')} text='සෘජුකෝණාස්‍රය'/>
              <ShapesCard image={require('../../assets/images/circle.jpg')} text='වෘත්තය'/>
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
    marginBottom: '3%',
    alignSelf: 'flex-end'
  },
  heading: {
    fontSize: 33,
    marginTop: '10%',
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
