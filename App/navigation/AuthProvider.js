import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [errortext, setErrortext] = useState('');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (!email || !password) {
              alert('Please fill Details');
              return;
            }
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            alert(e);
          }
        },
        // register: async (email, password) => {
        //   try{
        //     await auth().signInWithEmailAndPassword(email, password);
        //   }catch(e){
        //     console.log(e)
        //   }
        // },
        // googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const {idToken} = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential =
        //       auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth()
        //       .signInWithCredential(googleCredential)
        //       .catch(error => {
        //         alert('Something went wrong with signin:\n\n' + error);
        //       });
        //   } catch (error) {
        //     alert({error});
        //   }
        // },
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
              alert('Please fill Details');
              return;
            }
            if (password !== confirmPassword) {
              alert('Password not matched with the confirm password.');
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
                    alert(
                      'Something went wrong with added user to firestore:\n\n' +
                        error,
                    );
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                alert('Something went wrong with sign up:\n\n' + error);
              });
          } catch (e) {
            alert(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            alert(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
