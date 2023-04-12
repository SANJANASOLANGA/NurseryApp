import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import SinhalaCard from '../../components/SinhalaCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class SinhalaCreativeScreen extends Component {
  constructor() {
    super();
  }
  NavigateToColors = () => {
    this.props.navigation.navigate('SinhalaColorsScreen');
  };
  NavigateToPoems = () => {
    this.props.navigation.navigate('SinhalaPoemsScreen');
  };
  NavigateToColorsQuiz = () => {
    this.props.navigation.navigate('SinhalaColorsQuiz');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('SinhalaMathsScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('SinhalaCommunityScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>පුංචි අපේ හැඩ වැඩ</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.Sinhalacard_container}>
              <SinhalaCard
                text={'Do you want to know Alphabet? Come try it !'}
                main={'පාට හුරුව'}
                onPress={this.NavigateToColors}
                image={require('../../assets/images/colorsS.png')}
              />
              <SinhalaCard
                main={'Quiz of Colors'}
                onPress={this.NavigateToColorsQuiz}
                image={require('../../assets/images/colorsQSinhala.png')}
              />
              <SinhalaCard
                text={'Do you want to know Phrases? Come try it !'}
                main={'කවි කියමු'}
                onPress={this.NavigateToPoems}
                image={require('../../assets/images/poemsS.jpg')}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <FontAwesome.Button
              name="chevron-left"
              size={25}
              backgroundColor="#8a36d1"
              color="white"
              onPress={this.NavigateToBack}
              borderRadius={10}
            />
            <MaterialCommunityIcons.Button
              onPress={this.NavigateToHome}
              name="home"
              size={25}
              backgroundColor="#8a36d1"
              color="white"
              style={{ marginLeft: 5 }}
            />
            <FontAwesome.Button
              name="chevron-right"
              size={25}
              color="white"
              backgroundColor="#8a36d1"
              borderRadius={10}
              onPress={this.NavigateToNext}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  Sinhalacard_container: {
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
    flex: 0.55,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '10%',
    marginVertical: '2%'
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: '8%',
    color: '#54225e',
    marginBottom: '5%'
  },
  Sinhalacard_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
