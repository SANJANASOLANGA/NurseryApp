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
export default class SinhalaCommunityScreen extends Component {
  constructor() {
    super();
  }
  NavigateToMyFam = () => {
    this.props.navigation.navigate('SinhalaMyFamScreen');
  };
  NavigateToSchool = () => {
    this.props.navigation.navigate('SinhalaSchoolScreen');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('SinhalaCreativeScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToNext = () => {
    this.props.navigation.navigate('EnglishScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>පුංචි අපේ සුමිතුරෝ</Text>
        </View>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.Sinhalacard_container}>
              <SinhalaCard
                main={'පුංචි අපේ පවුල'}
                onPress={this.NavigateToMyFam}
                image={require('../../assets/images/family1.png')}
              />
              <SinhalaCard
                main={'පුංචි අපේ පාසල'}
                onPress={this.NavigateToSchool}
                image={require('../../assets/images/school.png')}
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
    fontSize: 30,
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
