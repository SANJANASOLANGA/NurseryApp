import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from '../navigation/AuthProvider';

export function DrawerContent(props) {
  const paperTheme = useTheme();
  const {user, logout} = useContext(AuthContext);

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                marginTop: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
              }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15}}>
                {/* <Title style={styles.title}>{user.email}</Title>
                <Caption style={styles.caption}>@{user.uid}</Caption> */}
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
              label="Home"
              onPress={() => {
                props.navigation.navigate('HomeScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ProfileScreenDrawer');
              }}
            />
            <Text />
          </Drawer.Section>
          <Text />
          <Drawer.Section title="Learning Area">
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Alphabet"
              onPress={() => {
                props.navigation.navigate('AlphabetScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Phrases"
              onPress={() => {
                props.navigation.navigate('PhrasesScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Numbers"
              onPress={() => {
                props.navigation.navigate('NumbersScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Shapes"
              onPress={() => {
                props.navigation.navigate('ShapesScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Colors"
              onPress={() => {
                props.navigation.navigate('ColorsScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Poems"
              onPress={() => {
                props.navigation.navigate('PoemsScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="Family"
              onPress={() => {
                props.navigation.navigate('MyFamScreenDrawer');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="book" color={color} size={size} />
              )}
              label="School"
              onPress={() => {
                props.navigation.navigate('SchoolScreenDrawer');
              }}
            />
            <Text />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Activities"
              onPress={() => {
                props.navigation.navigate('ActivityScreenDrawer');
              }}
            />
            <Text />
          </Drawer.Section>
          <Text />
          <Drawer.Section title="Little Kingdom">
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="About Us"
              onPress={() => {
                props.navigation.navigate('AboutScreen');
              }}
            />
            <Text />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            logout();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
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
    borderTopWidth: 1,
  },
});
