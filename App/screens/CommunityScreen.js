import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Card from '../components/Card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default class CommunityScreen extends Component {
  constructor() {
    super();
  }
  NavigateToMyFam = () => {
    this.props.navigation.navigate('MyFamScreen');
  };
  NavigateToSchool = () => {
    this.props.navigation.navigate('SchoolScreen');
  };
  NavigateToBack = () => {
    this.props.navigation.navigate('CreativeScreen');
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
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View>
          <Text style={styles.heading}>Community</Text>
        </View>
        <ScrollView>
        <View style={styles.body}>
          <View style={styles.card_container}>
            <Card
              text={'Do you want to know Alphabet? Come try it !'}
              main={'FAMILY'}
              onPress={this.NavigateToMyFam}
              name={'book'}
            />
            <Card
              text={'Do you want to know Phrases? Come try it !'}
              main={'SCHOOL'}
              onPress={this.NavigateToSchool}
              name={'book'}
            />
            <View style={{elevation: 10}}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/vectors/young-teacher-with-joyful-kids-vector-id1251666012?k=20&m=1251666012&s=612x612&w=0&h=B3qK4v77dodW1bdh6dRksJ5bBSxn1Pu4TXMTQLvA-LI=',
                }}
                style={{
                  width: 375,
                  height: 260,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                  backgroundColor: '#e6f1f2',
                  borderRadius: 15,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
        <FontAwesome.Button
            name="chevron-left"
            size={25}
            backgroundColor="#88d9ca"
            color="#000000aa"
            onPress={this.NavigateToBack}
            borderRadius={10}
          />
          <MaterialCommunityIcons.Button
            onPress={this.NavigateToHome}
            name="home"
            size={25}
            backgroundColor="#88d9ca"
            color="#000000aa"
          />
          <FontAwesome.Button
            name="chevron-right"
            size={25}
            color="#000000aa"
            backgroundColor="#88d9ca"
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
    marginTop: 400,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 10,
    marginBottom: 40,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
  },
});
