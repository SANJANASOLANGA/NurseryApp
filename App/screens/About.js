import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
export default class AboutScreen extends Component {
  constructor() {
    super();
  }
  NavigateToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/images/bg.jpg')}
        style={styles.screen}>
        <ScrollView>
          <Text style={styles.main}>EduKids Nursery</Text>
          <Text style={styles.sub}>About Us</Text>
          <Text style={styles.sub}>Privacy Policies</Text>
          <Text />
          <Text />
          <Text style={styles.modal_sub}>Effective date: 2023-04-25</Text>
          <Text style={styles.modal_sub}>Introduction</Text>
          <Text style={styles.modal_text}>
            Sanjana S. A. D. S. built the EduKids Nursery app as a Free app.
            This SERVICE is provided by Sanjana S. A. D. S. at no cost and is
            intended for use as is. This page is used to inform visitors
            regarding my policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use my Service. If you
            choose to use my Service, then you agree to the collection and use
            of information in relation to this policy. The Personal Information
            that I collect is used for providing and improving the Service. I
            will not use or share your information with anyone except as
            described in this Privacy Policy. The terms used in this Privacy
            Policy have the same meanings as in our Terms and Conditions, which
            are accessible at Sanjana S. A. D. S. Nursery unless otherwise defined in
            this Privacy Policy.
          </Text>
          <Text style={styles.modal_sub}>Information Collection and Use</Text>
          <Text style={styles.modal_text}>
            For a better experience, while using our Service, I may request you
            to provide us with certain personally identifiable information,
            including but not limited to First Name, Last Name, About, Contact
            Number, Country, City, email, password. The information that I
            request will be retained on your device and is not collected by me
            in any way. The app does use third-party services that may collect
            information used to identify you. Link to the privacy policy of
            third-party service providers used by the app
          </Text>
          <Text style={styles.points}>Google Play Services</Text>
          <Text style={styles.points}>Google Analytics for Firebase</Text>
          <Text style={styles.points}>Facebook</Text>
          <Text style={styles.modal_sub}>Log Data</Text>
          <Text style={styles.modal_text}>
            I want to inform you that whenever you use my Service, in a case of
            an error in the app I collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing my Service, the time and date of your use of
            the Service, and other statistics.
          </Text>
          <Text style={styles.modal_sub}>Security</Text>
          <Text style={styles.modal_text}>
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </Text>
          <Text style={styles.modal_sub}>Children’s Privacy</Text>
          <Text style={styles.modal_text}>
            These Services address under the age of 13. I do knowingly collect
            personally identifiable information from children under 13 years of
            age. If you do not like about this , please contact me so that I
            will be able to do the necessary actions.
          </Text>
          <Text style={styles.sub}>Terms of Service</Text>
          <Text style={styles.modal_text}>
            By downloading or using the app, these terms will automatically
            apply to you – you should make sure therefore that you read them
            carefully before using the app.
          </Text>
          <Text style={styles.points}>
            You’re not allowed to copy or modify the app, any part of the app,
            or our trademarks in any way.
          </Text>
          <Text style={styles.points}>
            You’re not allowed to attempt to extract the source code of the app,
            and you also shouldn’t try to translate the app into other languages
            or make derivative versions.
          </Text>
          <Text style={styles.points}>
            The app itself, and all the trademarks, copyright, database rights,
            and other intellectual property rights related to it, still belong
            to Sanjana S. A. D. S..
          </Text>
          <Text style={styles.modal_text}>
            Sanjana S. A. D. S. is committed to ensuring that the app is as useful
            and efficient as possible. For that reason, we reserve the right to
            make changes to the app or to charge for its services, at any time
            and for any reason. We will never charge you for the app or its
            services without making it very clear to you exactly what you’re
            paying for.
          </Text>
          <Text style={styles.modal_text}>
            The EduKids Nursery app stores and processes personal data
            that you have provided to us, to provide my Service. It’s your
            responsibility to keep your phone and access to the app secure. We
            therefore recommend that you do not jailbreak or root your phone,
            which is the process of removing software restrictions and
            limitations imposed by the official operating system of your device.
            It could make your phone vulnerable to malware/viruses/malicious
            programs, compromise your phone’s security features and it could
            mean that the Little Kingdom Nursery app won’t work properly or at
            all.
          </Text>
          <Text style={styles.modal_text}>
            The app does use third-party services that declare their Terms and
            Conditions. Link to Terms and Conditions of third-party service
            providers used by the app
          </Text>
          <Text style={styles.points}>Google Play Services</Text>
          <Text style={styles.points}>Google Analytics for Firebase</Text>
          <Text style={styles.points}>Facebook</Text>
          <Text style={styles.modal_text}>
            You should be aware that there are certain things that Sanjana S. A. D. S.
             will not take responsibility for. Certain functions of the app
            will require the app to have an active internet connection. The
            connection can be Wi-Fi or provided by your mobile network provider,
            but Sanjana S. A. D. S. cannot take responsibility for the app not
            working at full functionality if you don’t have access to Wi-Fi, and
            you don’t have any of your data allowance left.
          </Text>
          <Text style={styles.modal_text}>
            If you’re using the app outside of an area with Wi-Fi, you should
            remember that the terms of the agreement with your mobile network
            provider will still apply. As a result, you may be charged by your
            mobile provider for the cost of data for the duration of the
            connection while accessing the app, or other third-party charges. In
            using the app, you’re accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your
            home territory (i.e. region or country) without turning off data
            roaming. If you are not the bill payer for the device on which
            you’re using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app.
          </Text>
          <Text style={styles.modal_text}>
            Along the same lines, Sanjana S. A. D. S. cannot always take
            responsibility for the way you use the app i.e. You need to make
            sure that your device stays charged – if it runs out of battery and
            you can’t turn it on to avail the Service, Sanjana S. A. D. S. cannot
            accept responsibility.
          </Text>
          <Text style={styles.modal_text}>
            With respect to Sanjana S. A. D. S.’s responsibility for your use of
            the app, when you’re using the app, it’s important to bear in mind
            that although we endeavor to ensure that it is updated and correct
            at all times, we do rely on third parties to provide information to
            us so that we can make it available to you. Sanjana S. A. D. S. accepts
            no liability for any loss, direct or indirect, you experience as a
            result of relying wholly on this functionality of the app.
          </Text>
          <Text style={styles.modal_text}>
            At some point, we may wish to update the app. The app is currently
            available on Android – the requirements for the system(and for any
            additional systems we decide to extend the availability of the app
            to) may change, and you’ll need to download the updates if you want
            to keep using the app. Sanjana S. A. D. S. does not promise that it
            will always update the app so that it is relevant to you and/or
            works with the Android version that you have installed on your
            device. However, you promise to always accept updates to the
            application when offered to you, We may also wish to stop providing
            the app, and may terminate use of it at any time without giving
            notice of termination to you. Unless we tell you otherwise, upon any
            termination, (a) the rights and licenses granted to you in these
            terms will end; (b) you must stop using the app, and (if needed)
            delete it from your device.
          </Text>
          <Text style={styles.modal_sub}>
            Changes to This Terms and Conditions
          </Text>
          <Text style={styles.modal_text}>
            I may update our Terms and Conditions from time to time. Thus, you
            are advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Terms and Conditions on
            this page.
          </Text>
          <Text style={styles.modal_text}>
            These terms and conditions are effective as of 2023-04-25.
          </Text>
          <Text style={styles.sub}>Contact Us</Text>
          <Text />
          <Text style={styles.contact_text}>sanjanasolangaarachchi@gmail.com.</Text>
          {/* <Text style={styles.contact_text}>www.edukids.com</Text> */}
          <Text style={styles.contact_text}>+94775842753</Text>
          <Image
            style={styles.logo}
            source={require('../assets/images/logo-no-background.png')}
          />
          <Text />
          <View
            style={{flexDirection: 'row', marginLeft: 100, marginBottom: 25}}>
            <TouchableOpacity
              onPress={this.NavigateToHome}
              style={styles.button}>
              <Text style={styles.btn_txt}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  main: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: '10%',
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  sub: {
    fontSize: 37,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
    marginLeft: 20,
    marginTop: '10%',
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#8a36d1',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 10,
    fontFamily: 'KGPrimaryPenmanship2',
  },
  btn_txt: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  modal_text: {
    textAlign: 'justify',
    fontSize: 21,
    margin: 20,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  contact_text: {
    textAlign: 'justify',
    fontSize: 23,
    marginLeft: 20,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  modal_sub: {
    fontSize: 23,
    color: 'black',
    margin: 10,
    marginLeft: 20,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  points: {
    textAlign: 'justify',
    fontSize: 21,
    margin: 10,
    marginLeft: 40,
    color: '#54225e',
    fontFamily: 'KGPrimaryPenmanship2',
  },
  logo: {
    width: 80,
    height: 60,
    marginBottom: 100,
    margin: 20,
  },
});
