import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670235.jpg',
    subtitle: '         එක        1 ',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670248.jpg',
    subtitle: '         දෙක        2',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670259.jpg',
    subtitle: '         තුන      3',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182670268.jpg',
    subtitle: '         හතර       4',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/vector-illustration-set-school-kids-colorful-number-five-shaped-back-to-117688066.jpg',
    subtitle: '         පහ       5',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671597.jpg',
    subtitle: '         හය       6',
  },
  {
    illustration:
      'https://image.freepik.com/free-vector/flashcard-kindergarten-preschool-learning-counting-number-7-with-number-kids_283146-308.jpg',
    subtitle: '         හත      7',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671629.jpg',
    subtitle: '         අට      8',
  },
  {
    illustration:
      'https://thumbs.dreamstime.com/z/flashcard-kindergarten-preschool-learning-to-counting-number-number-kids-flashcard-kindergarten-182671640.jpg',
    subtitle: '         නවය       9',
  },
  {
    illustration:
      'https://previews.123rf.com/images/kankhem/kankhem2008/kankhem200800049/153296259-flashcard-for-kindergarten-and-preschool-learning-to-counting-number-10-with-a-number-of-kids-.jpg',
    subtitle: '         දහය       10',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Slider_Num = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const goBackward = () => {
    carouselRef.current.snapToPrev();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View>
        <View style={styles.item}>
          <ParallaxImage
            source={{uri: item.illustration}}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.19}
            {...parallaxProps}
          />
        </View>
        <Text
          style={{
            fontSize: 35,
            marginTop: 30,
            fontWeight: '400',
          }}>
          {item.subtitle}
        </Text>
      </View>
    );
  };

  return (
    <View container>
      <View style={styles.slider}>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </View>
  );
};

export default Slider_Num;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 10,
  },
  slider: {
    flex: 1,
    marginTop: 15,
    elevation: 10,
  },
  navigator: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  item: {
    width: screenWidth - 65,
    height: screenWidth - 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    elevation: 10,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 370,
    elevation: 15,
  },
  image: {
    width: 100,
    height: 180,
  },
  slider_text1: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 15,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'auto',
  },
  card1: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#faecbf',
    borderRadius: 15,
    marginRight: 50,
  },
  card2: {
    width: 100,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#faecbf',
    borderRadius: 15,
  },
});
