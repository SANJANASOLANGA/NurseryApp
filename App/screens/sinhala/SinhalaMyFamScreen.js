import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import SinhalaFamilyCard from '../../components/SinhalaFamily';
export default class SinhalaMyFamScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('SinhalaCommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('SinhalaSchoolScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <Text style={styles.heading}>පවුලේ සාමාජිකයන්</Text>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.card_container}>
              <SinhalaFamilyCard

                image={require('../../assets/images/mother.jpg')}
                text1={'අම්මා'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/father.jpg')}
                text1={'තාත්තා'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/brotherAndSister.jpg')}
                text1={'අක්කා සහ අයියා'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/brotherAndSister.jpg')}
                text1={'නංගී සහ මල්ලී'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/grandMother.jpg')}
                text1={'ආච්චී'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/grandFather.jpg')}
                text1={'සීයා'}
              />
              <SinhalaFamilyCard

                image={require('../../assets/images/uncleAndAunty.jpg')}
                text1={'මාමා සහ නැන්දා'}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'flex-end',
    marginBottom: '8%',
    marginRight:'4%'
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 33,
    marginTop: '10%',
    textAlign: 'center',
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
