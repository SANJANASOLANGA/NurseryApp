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
      <Text style={styles.heading}>Learning can be fun !</Text>
      <ScrollView>
      <View style={styles.button_container}>
        <ScrollView horizontal={true}>
          <ImageBackground
            style={styles.card}
            source={require('../assets/images/EnglishActivity.png')}
            imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          >
            <View>
              <TouchableHighlight
                underlayColor={'white'}
                style={styles.button}
                onPress={() => navigation.navigate('ActivityScreenDrawer')}>
                <Text style={styles.textArea_text}>English Activities</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
          <ImageBackground
            style={[styles.card, {marginRight: 25,}]}
            source={require('../assets/images/sinhalaActivity.jpg')}
            imageStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          >
            <View>
              <TouchableHighlight
                underlayColor={'white'}
                style={styles.button}
                onPress={() => navigation.navigate('SinhalaActivityDrawer')}>
                <Text style={styles.textArea_text2}>සිංහල පාඩම් හුරුව</Text>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </ScrollView>
        <Text style={styles.quote}>“Teaching is not about answering questions but about raising questions – opening doors for them in places that they could not imagine.” </Text>
        <Text style={styles.quote}>-Yawar Baig</Text>
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeActivities;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 42,
    marginTop: '10%',
    marginBottom: 20,
    textAlign: 'center',
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  button_container: {
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
  },
  textArea_text: {
    fontSize: 30,
    fontFamily: 'KGPrimaryPenmanship2',
    textAlign: 'center',
    color: 'white',
  }, 
  textArea_text2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 125,
    width: 330,
    height: 300,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 40,
    elevation: 10,
  },
  button: {
    width: 330,
    height: 75,
    backgroundColor: '#c055e0',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    marginTop: 350,
    elevation: 10,
  },
  quote: {
    fontSize: 18,
    color: '#54225e',
    fontFamily: 'comicz',
    marginLeft: '3%',
    marginRight:'3%',
    textAlign: 'justify'
  }
});
