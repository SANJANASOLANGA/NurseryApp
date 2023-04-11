import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
  ScrollView, ImageBackground
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const onPressSignUp = () => {
    register(email, password, confirmPassword)
    navigation.navigate('Login')
  } 

  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-no-background.png')}
      />
      <Text style={styles.text}>Create an account</Text>

      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormInput
        labelValue={confirmPassword}
        onChangeText={userPassword => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email, password, confirmPassword)}
        // onPress = {onPressSignUp}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => setShow1(true)}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Modal transparent={true} visible={show1}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View style={styles.modal_view}>
              <ScrollView>
                <Text style={styles.modal_heading}>Terms of service</Text>
                <Text />
                <Text style={styles.modal_text}>
                  By downloading or using the app, these terms will
                  automatically apply to you – you should make sure therefore
                  that you read them carefully before using the app.
                </Text>
                <Text style={styles.points}>
                  You’re not allowed to copy or modify the app, any part of the
                  app, or our trademarks in any way.
                </Text>
                <Text style={styles.points}>
                  You’re not allowed to attempt to extract the source code of
                  the app, and you also shouldn’t try to translate the app into
                  other languages or make derivative versions.
                </Text>
                <Text style={styles.points}>
                  The app itself, and all the trademarks, copyright, database
                  rights, and other intellectual property rights related to it,
                  still belong to Maleesha T. H.C..
                </Text>
                <Text style={styles.modal_text}>
                  Maleesha T. H.C. is committed to ensuring that the app is as
                  useful and efficient as possible. For that reason, we reserve
                  the right to make changes to the app or to charge for its
                  services, at any time and for any reason. We will never charge
                  you for the app or its services without making it very clear
                  to you exactly what you’re paying for.
                </Text>
                <Text style={styles.modal_text}>
                  The Little Kingdom Nursery app stores and processes personal
                  data that you have provided to us, to provide my Service. It’s
                  your responsibility to keep your phone and access to the app
                  secure. We therefore recommend that you do not jailbreak or
                  root your phone, which is the process of removing software
                  restrictions and limitations imposed by the official operating
                  system of your device. It could make your phone vulnerable to
                  malware/viruses/malicious programs, compromise your phone’s
                  security features and it could mean that the Little Kingdom
                  Nursery app won’t work properly or at all.
                </Text>
                <Text style={styles.modal_text}>
                  The app does use third-party services that declare their Terms
                  and Conditions. Link to Terms and Conditions of third-party
                  service providers used by the app
                </Text>
                <Text style={styles.points}>Google Play Services</Text>
                <Text style={styles.points}>Google Analytics for Firebase</Text>
                <Text style={styles.points}>Facebook</Text>
                <Text style={styles.modal_text}>
                  You should be aware that there are certain things that
                  Maleesha T. H.C. will not take responsibility for. Certain
                  functions of the app will require the app to have an active
                  internet connection. The connection can be Wi-Fi or provided
                  by your mobile network provider, but Maleesha T. H.C. cannot
                  take responsibility for the app not working at full
                  functionality if you don’t have access to Wi-Fi, and you don’t
                  have any of your data allowance left.
                </Text>
                <Text style={styles.modal_text}>
                  If you’re using the app outside of an area with Wi-Fi, you
                  should remember that the terms of the agreement with your
                  mobile network provider will still apply. As a result, you may
                  be charged by your mobile provider for the cost of data for
                  the duration of the connection while accessing the app, or
                  other third-party charges. In using the app, you’re accepting
                  responsibility for any such charges, including roaming data
                  charges if you use the app outside of your home territory
                  (i.e. region or country) without turning off data roaming. If
                  you are not the bill payer for the device on which you’re
                  using the app, please be aware that we assume that you have
                  received permission from the bill payer for using the app.
                </Text>
                <Text style={styles.modal_text}>
                  Along the same lines, Maleesha T. H.C. cannot always take
                  responsibility for the way you use the app i.e. You need to
                  make sure that your device stays charged – if it runs out of
                  battery and you can’t turn it on to avail the Service,
                  Maleesha T. H.C. cannot accept responsibility.
                </Text>
                <Text style={styles.modal_text}>
                  With respect to Maleesha T. H.C.’s responsibility for your use
                  of the app, when you’re using the app, it’s important to bear
                  in mind that although we endeavor to ensure that it is updated
                  and correct at all times, we do rely on third parties to
                  provide information to us so that we can make it available to
                  you. Maleesha T. H.C. accepts no liability for any loss,
                  direct or indirect, you experience as a result of relying
                  wholly on this functionality of the app.
                </Text>
                <Text style={styles.modal_text}>
                  At some point, we may wish to update the app. The app is
                  currently available on Android – the requirements for the
                  system(and for any additional systems we decide to extend the
                  availability of the app to) may change, and you’ll need to
                  download the updates if you want to keep using the app.
                  Maleesha T. H.C. does not promise that it will always update
                  the app so that it is relevant to you and/or works with the
                  Android version that you have installed on your device.
                  However, you promise to always accept updates to the
                  application when offered to you, We may also wish to stop
                  providing the app, and may terminate use of it at any time
                  without giving notice of termination to you. Unless we tell
                  you otherwise, upon any termination, (a) the rights and
                  licenses granted to you in these terms will end; (b) you must
                  stop using the app, and (if needed) delete it from your
                  device.
                </Text>
                <Text style={styles.modal_sub}>
                  Changes to This Terms and Conditions
                </Text>
                <Text style={styles.modal_text}>
                  I may update our Terms and Conditions from time to time. Thus,
                  you are advised to review this page periodically for any
                  changes. I will notify you of any changes by posting the new
                  Terms and Conditions on this page.
                </Text>
                <Text style={styles.modal_text}>
                  These terms and conditions are effective as of 2021-12-07
                </Text>
                <Text style={styles.modal_sub}>Contact Us</Text>
                <Text style={styles.modal_text}>
                  If you have any questions or suggestions about my Terms and
                  Conditions, do not hesitate to contact me at
                  thcmaleesha@gmail.com.
                </Text>
                <View style={styles.modal_btnWrap}>
                  <TouchableOpacity onPress={() => setShow2(true)}>
                    <Text style={styles.modal_btn}>Privacy Policies</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShow1(false)}>
                    <Text style={styles.ok}>OK</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={() => setShow2(true)}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policies
          </Text>
        </TouchableOpacity>
        <Modal transparent={true} visible={show2}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View style={styles.modal_view}>
              <ScrollView>
                <Text style={styles.modal_heading}>Privacy Policies</Text>
                <Text />
                <Text />
                <Text style={styles.modal_sub}>Effective date: 2021-12-01</Text>
                <Text style={styles.modal_sub}>Introduction</Text>
                <Text style={styles.modal_text}>
                  Maleesha T. H.C. built the Little Kingdom Nursery app as a
                  Free app. This SERVICE is provided by Maleesha T. H.C. at no
                  cost and is intended for use as is. This page is used to
                  inform visitors regarding my policies with the collection,
                  use, and disclosure of Personal Information if anyone decided
                  to use my Service. If you choose to use my Service, then you
                  agree to the collection and use of information in relation to
                  this policy. The Personal Information that I collect is used
                  for providing and improving the Service. I will not use or
                  share your information with anyone except as described in this
                  Privacy Policy. The terms used in this Privacy Policy have the
                  same meanings as in our Terms and Conditions, which are
                  accessible at Little Kingdom Nursery unless otherwise defined
                  in this Privacy Policy.
                </Text>
                <Text style={styles.modal_sub}>
                  Information Collection and Use
                </Text>
                <Text style={styles.modal_text}>
                  OFor a better experience, while using our Service, I may
                  require you to provide us with certain personally identifiable
                  information, including but not limited to First Name, Last
                  Name, About, Contact Number, Country, City, email, password.
                  The information that I request will be retained on your device
                  and is not collected by me in any way. The app does use
                  third-party services that may collect information used to
                  identify you. Link to the privacy policy of third-party
                  service providers used by the app
                </Text>
                <Text style={styles.points}>Google Play Services</Text>
                <Text style={styles.points}>Google Analytics for Firebase</Text>
                <Text style={styles.points}>Facebook</Text>
                <Text style={styles.modal_sub}>Log Data</Text>
                <Text style={styles.modal_text}>
                  I want to inform you that whenever you use my Service, in a
                  case of an error in the app I collect data and information
                  (through third-party products) on your phone called Log Data.
                  This Log Data may include information such as your device
                  Internet Protocol (“IP”) address, device name, operating
                  system version, the configuration of the app when utilizing my
                  Service, the time and date of your use of the Service, and
                  other statistics.
                </Text>
                <Text style={styles.modal_sub}>Security</Text>
                <Text style={styles.modal_text}>
                  I value your trust in providing us your Personal Information,
                  thus we are striving to use commercially acceptable means of
                  protecting it. But remember that no method of transmission
                  over the internet, or method of electronic storage is 100%
                  secure and reliable, and I cannot guarantee its absolute
                  security.
                </Text>
                <Text style={styles.modal_sub}>Children’s Privacy</Text>
                <Text style={styles.modal_text}>
                  These Services address under the age of 13. I do knowingly
                  collect personally identifiable information from children
                  under 13 years of age. If you do not like about this , please
                  contact me so that I will be able to do the necessary actions.
                </Text>
                <Text style={styles.modal_sub}>Contact Us</Text>
                <Text style={styles.modal_text}>
                  If you have any questions or suggestions about my Privacy
                  Policy, do not hesitate to contact me at
                  thcmaleesha@gmail.com.
                </Text>
                <View style={styles.modal_btnWrap}>
                  <Text />
                  <TouchableOpacity onPress={() => setShow1(true)}>
                    <Text style={styles.modal_btn}> Terms of Service</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setShow2(false)}>
                    <Text style={styles.ok}>OK</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#faecbf',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingBottom: 50,
  },
  logo: {
    width: 85,
    height: 65,
    marginBottom: '10%',
    marginTop: '10%'
  },
  text: {
    fontSize: 28,
    marginBottom: 40,
    color: "#54225e",
  },
  navButton: {
    marginTop: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: "#54225e",
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 15,
    justifyContent: 'center',
    marginBottom: 55,
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: "#54225e",
  },
  modal_view: {
    flex: 1,
    backgroundColor: '#ffff',
    marginTop: 50,
    marginBottom: 50,
    marginRight: 25,
    marginLeft: 25,
    padding: 25,
    borderRadius: 5,
  },
  modal_heading: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
  modal_btnWrap: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 150,
    flexDirection: 'row',
  },
  modal_btn: {
    textAlign: 'right',
    fontSize: 20,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 55,
    marginRight: 110,
  },
  ok: {
    textAlign: 'right',
    color: 'black',
    fontSize: 22,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 55,
    marginRight: 10,
  },
  modal_text: {
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 10,
  },
  points: {
    textAlign: 'justify',
    fontSize: 15,
    marginTop: 10,
    marginLeft: 10,
  },
  modal_sub: {
    fontSize: 17,
    color: 'black',
    marginTop: 25,
  },
});
