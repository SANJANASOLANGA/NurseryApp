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
          backgroundColor: '#e8cefe',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onBoard1.png')}
            />
          ),
          title: 'Learn',
          subtitle: 'By using our mini lessons',
          titleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 40 },
          subTitleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 26}
        },
        {
          backgroundColor: '#e8cefe',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onBoard2.png')}
            />
          ),
          title: 'Practice',
          subtitle: 'With our cute quizzes',
          titleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 40 },
          subTitleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 26}
        },
        {
          backgroundColor: '#e8cefe',
          image: (
            <Image
              style={styles.image}
              source={require('../assets/images/onBoard3.png')}
            />
          ),
          title: 'Build' ,
          subtitle: 'Your Knowledge',
          titleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 40 },
          subTitleStyles: {color: '#54225e', fontFamily:'KGPrimaryPenmanship2', fontSize: 26}
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 450,
  },
  buttons: {
    fontSize: 22,
    marginStart: 25,
    marginEnd: 25,
    fontFamily:'KGPrimaryPenmanship2',
    color: '#54225e'
  },
});
