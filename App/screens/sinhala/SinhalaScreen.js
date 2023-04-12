import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import SinhalaCard from '../../components/SinhalaCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SinhalaScreen extends Component {
  constructor() {
    super();
  }
  NavigateToAlphabet = () => {
    this.props.navigation.navigate('SinhalaAlphabet');
  };
  NavigateToPhrases = () => {
    this.props.navigation.navigate('SinhalaPhrasesScreen');
  };
  NavigateToAlphabetQuiz = () => {
    this.props.navigation.navigate('SinhalaAlphabetQuiz');
  };
  NavigateToPhrasesQuiz = () => {
    this.props.navigation.navigate('SinhalaPhrasesQuiz');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('CommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('SinhalaMathsScreen');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>පුංචි අපේ මව්බස</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.card_container}>
              <SinhalaCard
                // text={'Do you want to know Alphabet? Come try it !'}
                main={'සිංහල අකුරු හුරුව'}
                onPress={this.NavigateToAlphabet}
                image={require('../../assets/images/sinhalaActivity.jpg')}
              />
              <SinhalaCard
                main={'සිංහල අකුරු හුරුව පාඩම්'}
                onPress={this.NavigateToAlphabetQuiz}
                image={require('../../assets/images/sinhalaActivity.jpg')}
              // name={'edit'}
              />
              <SinhalaCard
                // text={'Do you want to know Phrases? Come try it !'}
                main={'දෙබස් හුරුව'}
                onPress={this.NavigateToPhrases}
                image={require('../../assets/images/PhrasesE.png')}
              // name={'book'}
              />
              <SinhalaCard
                main={'Quiz of Phrases'}
                onPress={this.NavigateToPhrasesQuiz}
                image={require('../../assets/images/PhrasesQ.png')}
              // name={'edit'}
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
  card_container: {
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
    flex: 0.5,
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
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
