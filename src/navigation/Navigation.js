import React, { useContext } from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';
import CharDetail from '../pages/CharDetail/CharDetail';
import FavoritesComic from '../pages/Favorites/FavoritesComic';
import FavoritesHero from '../pages/Favorites/FavoritesHero';
import Settings from '../pages/Settings';
import ComicHero from '../pages/ComicHero/ComicHero';
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomePage = () => {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Menü',
          headerTitleStyle: { color: '#616161' },
          drawerLabel: 'Ana Sayfa',
        }}
      />
      <Drawer.Screen
        name="Favorite Page"
        component={FavoritePage}
        options={{
          title: 'Menü',
          headerTitleStyle: { color: '#616161' },
          drawerLabel: 'Favorite Page',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

const FavoritePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorites Hero"
        component={FavoritesHero}
        options={{
          title: 'Favorites Hero',
          headerTitleStyle: { color: '#616161' },
          tabBarLabel: 'Hero',
          tabBarIcon: () => <Icon name="shield" size={25} />
        }}
      />
      <Tab.Screen
        name="Favorites Comic"
        component={FavoritesComic}
        options={{
          title: 'Favorites Comic',
          headerTitleStyle: { color: '#616161' },
          tabBarLabel: 'Comic',
          tabBarIcon: () => <Icon name="book-open-page-variant" size={25} />
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  // const {theme} = useContext(ThemeContext)
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme == "dark" ? DarkTheme: DefaultTheme }>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomePage}  />
        <Stack.Screen name="CharDetailPage" component={CharDetail} />
        <Stack.Screen name="Favorite Page" component={FavoritePage} />
        <Stack.Screen name="ComicHero" component={ComicHero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
