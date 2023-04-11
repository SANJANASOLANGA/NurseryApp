import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Drawer,
  Text,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../navigation/AuthProvider';

export function DrawerContent(props) {
  const {user, logout} = useContext(AuthContext);
  
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={{backgroundColor: '#faedfc'}} {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              {/* <Avatar.Image
                source={{
                  uri: 'https://images.pexels.com/photos/3527786/pexels-photo-3527786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
                size={50}
              /> */}
              <View style={{marginLeft: 15, alignItems: 'center', alignContent: 'center'}}>
                <Title style={styles.title}>{user.email}</Title>
                {/* <Caption style={styles.caption}>@{user.uid}</Caption> */}
              </View>
            </View>
          </View>
          <Text />
          <Text />
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0' 
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('ProfileScreen');
              }}
            />
            <Text />
          </Drawer.Section>
          <Text />
          <Drawer.Section title={<Text style={styles.title}>Learning Area</Text>}>
            
            <Text />
            <Text style={styles.subTitle}>English</Text>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Alphabet" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('AlphabetScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Phrases" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('PhrasesScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Numbers" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('NumbersScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Shapes" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('ShapesScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Colors" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('ColorsScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Poems" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('PoemsScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="Family" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('MyFamScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="School" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('SchoolScreenDrawer');
              }}
            />
            <Text />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Activities" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('ActivityScreenDrawer');
              }}
            />
            <Text />
            <Text style={styles.subTitle}>සිංහල</Text>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="සිංහල හෝඩිය" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaAlphabetScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="කෙටි දෙබස්" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaPharasesScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="ඉලක්කම්" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaNumbersScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="හැඩ" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaShapesScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="පාට" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaColorsScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="කවි" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaPoemsScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="පවුල" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaFamilyScreenStack');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book-open" color={color} size={size} />
              )}
              label="පාසල" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaScoolScreenStack');
              }}
            />
            <Text />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="ක්‍රියාකාරකම්" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 14}}
              onPress={() => {
                props.navigation.navigate('SinhalaActivityDrawer');
              }}
            />
          </Drawer.Section>
          <Text />
          <Drawer.Section title={<Text style={styles.title}>EduKids</Text>}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="About Us" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
              labelStyle= {{fontSize: 16}}
              onPress={() => {
                props.navigation.navigate('AboutScreen');
              }}
            />
            <Text />
          </Drawer.Section>
        </View>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={'#54225e'} size={size} />
          )}
          label="Log Out" inactiveTintColor='#54225e' ActiveTintColor= '#c055e0'
          labelStyle= {{fontSize: 16}}
          onPress={() => {
            logout();
          }}
        />
      </DrawerContentScrollView>
      {/* <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            logout();
          }}
        />
      </Drawer.Section> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    color: '#54225e', 
    fontSize:17, 
    fontWeight:'bold'
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#54225e',
    fontFamily:'KGPrimaryPenmanship'
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    backgroundColor: '#eecdf7',
    borderEndColor: '#eecdf7',
  },
  subTitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color:'#54225e',
    fontFamily:'KGPrimaryPenmanship'
  }
});
