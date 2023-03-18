import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class ColorsScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('CreativeScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToQuiz = () => {
    this.props.navigation.navigate('ColorsQuiz');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/background2.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>Let's Learn Colors</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.card_container}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Yellow</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'green',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Green</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'blue',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Blue</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Orange</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Red</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'pink',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Pink</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'purple',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Purple</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'brown',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Brown</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'gray',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Gray</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'gold',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>Gold</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>White</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'black',
                  width: 150,
                  height: 100,
                  borderRadius: 15,
                  marginTop: 35,
                  elevation: 10,
                }}>
                <Text style={styles.card_text}>
                  <Text style={{color: 'white'}}>Black</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.NavigateToCreative}
            style={styles.button}>
            <Text style={styles.btn_txt}>Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.NavigateToQuiz} style={styles.button}>
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
    marginTop: 20,
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20,
    marginLeft: 100,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginLeft: 15,
  },
  heading: {
    fontSize: 33,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
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
