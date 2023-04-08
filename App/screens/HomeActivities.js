import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
  ScrollView
} from 'react-native';

const HomeActivities = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.safearea}>
      <Text style={styles.heading}>Fun Activities</Text>
      <View style={styles.button_container}>
        <ScrollView horizontal={true}>
        <ImageBackground
          style={styles.card}
          source={require('../assets/images/sinhalaActivity.jpg')}
        >
          <View>
            <TouchableHighlight
              underlayColor={'white'}
              style={styles.button}
              onPress={() => navigation.navigate('SinhalaActivityDrawer')}>
              <Text style={styles.textArea_text}>සිංහල</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.card}
          source={require('../assets/images/english.jpg')}
        >
          <View>
            <TouchableHighlight
              underlayColor={'white'}
              style={styles.button}
              onPress={() => navigation.navigate('ActivityScreenDrawer')}>
              <Text style={styles.textArea_text}>English</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomeActivities;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 35,
    marginTop: '10%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#54225e',
    fontWeight: 'bold',
  },
  button_container: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
  textArea_text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  card: {
    width: 400,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 125,
    marginLeft: 12,
    elevation: 10,
    width: 350,
    height: 320,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 40,
    elevation: 10,
  },
  button: {
    width: 350,
    height: 65,
    backgroundColor: '#c055e0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 350,
    elevation: 10,
  },
});
