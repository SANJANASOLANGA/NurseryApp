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
import SinhalaSchoolCard from '../../components/SinhalaSchool';
export default class SinhalaSchoolScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('SinhalaCommunityScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>පුංචි අපේ පාසල</Text>
        </View>
        <View style={styles.body}>
          <ScrollView horizontal={true}>
            <View style={styles.card_container}>
              <SinhalaSchoolCard
                image={require('../../assets/images/principal.jpg')}
                text1={'විදුහල්පතිතුමා'}
              />
              <SinhalaSchoolCard
                image={require('../../assets/images/madam.jpg')}
                text1={'ගුරුතුමිය'}
              />
              <SinhalaSchoolCard
                image={require('../../assets/images/sir.jpg')}
                text1={'ගුරුතුමා'}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.NavigateToCreative}
            style={styles.button}>
            <Text style={styles.btn_txt}>Menu</Text>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
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
    flex: 1,
    alignItems: 'flex-end',
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
    marginTop: '7%',
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
    fontSize: 26,
    color: 'white',
    fontFamily: 'KGPrimaryPenmanship2',
  },
});
