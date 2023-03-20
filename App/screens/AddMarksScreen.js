import React, {useState, useContext} from 'react';
import {
  TouchableOpacity,
  Text,
  Platform,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {windowHeight, windowWidth} from '../constants/Dimensions';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {
  InputField,
  InputWrapper,
  AddImage,
  SubmitBtn,
  SubmitBtnText,
  StatusWrapper,
} from '../styles/Addpost';

import {AuthContext} from '../navigation/AuthProvider';
import NavigationCard from '../components/NavigationCard';

const AddMarkscreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [post, setPost] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then(image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitPost = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);
    console.log('Post: ', post);

    firestore()
      .collection('posts')
      .add({
        userId: user.uid,
        post: post,
        postImg: imageUrl,
        postTime: firestore.Timestamp.fromDate(new Date()),
        likes: null,
        comments: null,
      })
      .then(() => {
        console.log('Feed Added!');
        Alert.alert(
          'Feed Added!',
          'Your feed has been published Successfully now in your profile!',
        );
        setPost(null);
      })
      .catch(error => {
        console.log(
          'Something went wrong with added post to firestore.',
          error,
        );
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.container}>
      <InputWrapper>
        {image != null ? <AddImage source={{uri: image}} /> : null}

        <InputField
          placeholder="Feed Your Profile with Marks                   Add something. ..."
          multiline
          numberOfLines={4}
          value={post}
          onChangeText={content => setPost(content)}
        />
        {uploading ? (
          <StatusWrapper>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size="large" color="#faecbf" />
          </StatusWrapper>
        ) : (
          <TouchableOpacity style={styles.buttonContainer} onPress={submitPost}>
            <Text style={styles.buttonText}>Feed</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </InputWrapper>
      <ActionButton buttonColor="#faecbf">
        <ActionButton.Item
          buttonColor="#faecbf"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </ImageBackground>
  );
};

export default AddMarkscreen;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
  },
  buttonContainer: {
    width: '60%',
    height: windowHeight / 15,
    backgroundColor: '#faecbf',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    marginTop: 20,
    marginRight: 70,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
