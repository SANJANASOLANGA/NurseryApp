import React from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        borderRadius: 5,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Skip</Text>
  </TouchableHighlight>
);
const Next = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Next</Text>
  </TouchableHighlight>
);
const Done = ({...props}) => (
  <TouchableHighlight {...props} underlayColor={'none'}>
    <Text style={styles.buttons}>Done</Text>
  </TouchableHighlight>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#bee6e1',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onboarding1.png')}
            />
          ),
          title: 'Learn',
          subtitle: 'By using our mini lessons',
        },
        {
          backgroundColor: '#f5e5ab',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onboarding2.png')}
            />
          ),
          title: 'Practice',
          subtitle: 'With our cute quizzes',
        },
        {
          backgroundColor: '#f7dae6',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onboarding3.png')}
            />
          ),
          title: 'Build',
          subtitle: 'Your Knowledge',
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
  },
  buttons: {
    fontSize: 22,
    marginStart: 25,
    marginEnd: 25,
  },
});
