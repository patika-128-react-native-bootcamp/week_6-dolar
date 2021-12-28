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
import { ThemeContext } from '../context/ThemeContext/ThemeProvider';
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const HomePage = () => {
  return (
    <Drawer.Navigator  >
      <Drawer.Screen name="Main" component={Main}   />
      <Drawer.Screen name="Favorite Page" component={FavoritePage} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

const FavoritePage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites Hero" component={FavoritesHero} />
      <Tab.Screen name="Favorites Comic" component={FavoritesComic} />
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
