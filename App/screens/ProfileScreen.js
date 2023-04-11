import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Modal,
} from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { windowHeight, windowWidth } from '../constants/Dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';

const ProfileScreen = ({ navigation, route }) => {
  const { user, logout } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);
  const [show1, setShow1] = useState(false);

  const fetchPosts = async () => {
    try {
      const list = [];

      await firestore()
        .collection('posts')
        .where('userId', '==', route.params ? route.params.userId : user.uid)
        .orderBy('postTime', 'desc')
        .get()
        .then(querySnapshot => {
          // console.log('Total Posts: ', querySnapshot.size);

          querySnapshot.forEach(doc => {
            const { userId, post, postImg, postTime } = doc.data();
            list.push({
              id: doc.id,
              userId,
              userName: 'Test Name',
              userImg:
                'https://cdn2.vectorstock.com/i/thumb-large/04/71/person-icon-vector-2110471.jpg',
              postTime: postTime,
              post,
              postImg,
              liked: false,
            });
          });
        });

      setPosts(list);

      if (loading) {
        setLoading(false);
      }

      // console.log('Posts: ', posts);
    } catch (e) {
      console.log(e);
    }
  };

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(route.params ? route.params.userId : user.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          // console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUser();
    fetchPosts();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => { };

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          <Text style={styles.userName}>
            {/* {userData ? userData.fname || 'New' : 'New'}{' '}
            {userData ? userData.lname || 'User' : 'User'} */}
            {auth().currentUser.email}
          </Text>
          <Text style={styles.aboutUser}>
            {userData ? userData.about || 'Please update your profile !' : ''}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setShow1(true)}
          style={{
            alignItems: 'center', marginTop: '7%'
          }}>
          <MaterialCommunityIcons
            name="logout-variant"
            size={30}
            style={{ margin: 5, color: '#54225e' }}
          />
          <Text style={{color: '#54225e', fontWeight: 'bold'}}>Log Out</Text>
        </TouchableOpacity>
        <Modal transparent={true} visible={show1}>
          <View style={{ backgroundColor: '#000000aa', flex: 1 }}>
            <View style={styles.modal_view}>
              <Text style={styles.modal_Text}>
                Are you sure, you want to logout ?
              </Text>
              <View style={styles.modal_btnWrap}>
                <Text />
                <TouchableOpacity onPress={() => logout()}>
                  <Text style={styles.modal_btn}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShow1(false)}>
                  <Text style={styles.modal_btn}> No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View
          style={{
            borderTopColor: '#54225e',
            borderTopWidth: 1,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 40,
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 30,
              color: '#54225e'
            }}>
            Dashboard
          </Text>
        </View>

        <ScrollView
          horizontal={true}
          style={styles.container}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={true}
        >
          {posts.map(item => (
            <PostCard key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </ScrollView>
        <View style={styles.userBtnWrapper}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('AddMarksScreen')}>
            <Text style={styles.buttonText}>Add Your Marks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 100,
    marginBottom: 20,
  },
  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    color: '#54225e',
  },
  aboutUser: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#54225e'
  },
  userBtnWrapper: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 40,
    marginTop: 30,
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    margin: 20,
    width: '40%',
    height: windowHeight / 15,
    backgroundColor: '#8a36d1',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  modal_view: {
    flex: 0.3,
    width: 350,
    backgroundColor: '#eecdf7',
    padding: 35,
    borderRadius: 25,
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '75%',
    alignItems: 'center',
    elevation: 5,
  },
  modal_Text: {
    fontSize: 23,
    color: '#54225e'
  },
  modal_btnWrap: {
    flex: 1,
    flexDirection: 'row',
  },
  modal_btn: {
    width: 80,
    height: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginTop: '40%',
    backgroundColor: '#8a36d1',
    borderRadius: 15,
    color: 'white',
    elevation: 5,
  },
});
