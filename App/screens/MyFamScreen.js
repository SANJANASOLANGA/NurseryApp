/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FamilyCard from '../components/Family';
export default class MyFamScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('CommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('SchoolScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.screen}>
          <Text style={styles.heading}>Family Members</Text>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.card_container}>
              <FamilyCard
                image={require('../assets/images/mother.jpg')}
                text1={'Mother,'}
                text2={'is an allegory about God and the Earth. ... '}
              />
              <FamilyCard
                image={require('../assets/images/father.jpg')}
                text1={'Father,'}
                text2={' makes all the difference in a childs life. ...'}
              />
              <FamilyCard
                image={require('../assets/images/brotherAndSister.jpg')}
                text1={'Brother & Sister'}
                text2={
                  'Childhood becomes special when you share it with your sibling. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/grandMother.jpg')}
                text1={'Grand Mother,'}
                text2={
                  'is someone who has always been there for you and always will be. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/grandFather.jpg')}
                text1={'Grand Father,'}
                text2={
                  'is someone with silver in his hair and gold in his heart. ...'
                }
              />
              <FamilyCard
                image={require('../assets/images/uncleAndAunty.jpg')}
                text1={'Uncle & Aunty'}
                text2={
                  'Only who can give me a hug like my parents and keep secrets like my siblings. ...'
                }
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.NavigateToCreative}
            style={styles.button}>
            <Text style={styles.btn_txt}> Menu</Text>
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
    flex: 7.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card_container: {
    marginLeft: 10,
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
    flex: 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    marginBottom: '3%',
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 33,
    marginTop: '5%',
    textAlign: 'center',
    marginBottom: 20,
    color: '#54225e',
    fontWeight: 'bold',
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
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
    color: 'white'
  },
});
