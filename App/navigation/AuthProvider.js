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
              Alert.alert('Please fill Details');
              return;
            }
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert("Logged Successfully !")
          } catch (e) {
            Alert.alert(e);
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
              .catch(error => {
                Alert.alert('Something went wrong with signin:\n\n' + error);
              });
          } catch (error) {
            Alert.alert({error});
            console.log({error})
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
              Alert.alert('Please fill Details');
              return;
            }
            if (password !== confirmPassword) {
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
                    Alert.alert(
                      'Something went wrong with added user to firestore:\n\n' +
                        error,
                    );
                    console.log(e)
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                Alert.alert('Something went wrong with sign up:\n\n' + error);
                console.log('error 1 ',error)
              });
          } catch (e) {
            Alert.alert(e);
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
