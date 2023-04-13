import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Alert} from 'react-native';

// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (!email || !password) {
              Alert.alert('Please fill Details !');
              return;
            }
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert("Logged Successfully !")
          } catch (e) {
            // Alert.alert(e);
            if (e.code === 'auth/network-request-failed') {
              Alert.alert('Try again !','Please check your internet connection')
            }else if (e.code === 'auth/wrong-password'){
              Alert.alert('Invalid password !','Enter your password correctly')
            }else if (e.code === 'auth/unknown') {
              Alert.alert('Try again !','Something went wrong')
            }else{
              Alert.alert('Try again !', 'Something went wrong')
              console.log('error 1 ',e)
            }
            console.log(e)
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)
              .catch(e => {
                Alert.alert('Something went wrong with signin');
                console.log(e)
              });
          } catch (e) {
            Alert.alert('error 1');
            console.log(e)
          }
        },
        // fbLogin: async () => {
        //   try {
        //     // Attempt login with permissions
        //     const result = await LoginManager.logInWithPermissions([
        //       'public_profile',
        //       'email',
        //     ]);

        //     if (result.isCancelled) {
        //       throw 'User cancelled the login process';
        //     }

        //     // Once signed in, get the users AccesToken
        //     const data = await AccessToken.getCurrentAccessToken();

        //     if (!data) {
        //       throw 'Something went wrong obtaining access token';
        //     }

        //     // Create a Firebase credential with the AccessToken
        //     const facebookCredential = auth.FacebookAuthProvider.credential(
        //       data.accessToken,
        //     );

        //     // Sign-in the user with the credential
        //     await auth()
        //       .signInWithCredential(facebookCredential)
        //       .catch(error => {
        //         alert('Something went wrong with signin:\n\n' + error);
        //       });
        //   } catch (error) {
        //     alert({error});
        //   }
        // },
        register: async (email, password, confirmPassword) => {
          try {
            if (!email || !password || !confirmPassword) {
              Alert.alert('Please fill Details !');
              return;
            }if (password !== confirmPassword) {
              Alert.alert("Password didn't match");
              return;
            }
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    fname: '',
                    lname: '',
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    Alert.alert('Try again !', 'Something went wrong');
                    console.log('error firebase ',e)
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(e => {
                if (e.code === 'auth/email-already-in-use') {
                  Alert.alert('Try again with another email!','The email you entered already exists')
                }else if (e.code === 'auth/weak-password'){
                  Alert.alert('Weak password !','Password should be at least 6 characters')
                }else if (e.code === 'auth/network-request-failed') {
                  Alert.alert('Try again !','Please check your internet connection')
                }else if (e.code === 'auth/invalid-email') {
                  Alert.alert('Invalid email !','Please enter a valid email')
                }else{
                  Alert.alert('Try again !', 'Something went wrong')
                  console.log('error 1 ',e)
                }
              });
          } catch (e) {
            Alert.alert('Try again !', 'Something went wrong');
            console.log('error 2 ',e)
          }
        },
        logout: async () => {
          try {
            Alert.alert('Thank you for joinning !')
            await auth().signOut();
          } catch (e) {
            Alert.alert(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
