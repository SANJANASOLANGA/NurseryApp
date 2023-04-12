import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class SinhalaColorsScreen extends Component {
  constructor() {
    super();
  }

  NavigateToCreative = () => {
    this.props.navigation.navigate('SinhalaCreativeScreen');
  };
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  NavigateToQuiz = () => {
    this.props.navigation.navigate('SinhalaColorsQuiz');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/bg.jpg')}
        style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.heading}>පාට හුරුව</Text>
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
                <Text style={styles.card_text}><Text style={{color: 'black'}}>කහ</Text></Text>
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
                <Text style={styles.card_text}>කොළ</Text>
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
                <Text style={styles.card_text}>නිල්</Text>
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
                <Text style={styles.card_text}>තැඹිලි</Text>
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
                <Text style={styles.card_text}>රතු</Text>
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
                <Text style={styles.card_text}><Text style={{color: 'black'}}>රෝස</Text></Text>
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
                <Text style={styles.card_text}>දම්</Text>
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
                <Text style={styles.card_text}>දුඹුරු</Text>
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
                <Text style={styles.card_text}>අළු</Text>
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
                  <Text style={styles.card_text}>
                <Text style={{color: 'black'}}>සුදු</Text></Text>
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
                  <Text style={{color: 'white'}}>කළු</Text>
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
    textAlign: 'center',
    marginBottom: 20,
    marginTop: "7%",
    color: '#54225e',
    fontWeight: 'bold',
  },
  card_text: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    fontWeight: 'bold'
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
