import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import SinhalaActivityButton from '../../components/SinhalaActivityButton';

const SinhalaActivityScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg.jpg')}
      style={styles.safearea}>
      <Text style={styles.heading}>පාඩම් හුරුව</Text>
      <View style={styles.button_container}>
        <SinhalaActivityButton
          buttonTitle="සිංහල හෝඩිය"
          onPress={() => navigation.navigate('SinhalaAlphabetQuiz')}
        />
        <SinhalaActivityButton
          buttonTitle="කෙටි දෙබස්"
          onPress={() => navigation.navigate('SinhalaPhrasesQuiz')}
        />
        <SinhalaActivityButton
          buttonTitle="ඉලක්කම්"
          onPress={() => navigation.navigate('SinhalaNumbersQuiz')}
        />
        {/* <SinhalaActivityButton
          buttonTitle="හැඩ"
          onPress={() => navigation.navigate('SinhalaShapesQuiz')}
        /> */}
        <SinhalaActivityButton
          buttonTitle="පාට"
          onPress={() => navigation.navigate('SinhalaColorsQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default SinhalaActivityScreen;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  heading: {
    fontSize: 33,
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
});
