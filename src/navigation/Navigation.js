import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from '../pages/Main';
import CharDetail from '../pages/CharDetail/CharDetail';
import FavoritesComic from '../pages/Favorites/FavoritesComic';
import FavoritesHero from '../pages/Favorites/FavoritesHero';
import Settings from '../pages/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} >
      <Drawer.Screen name="Main" component={Main} />
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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="CharDetailPage" component={CharDetail} />
        <Stack.Screen name="Favorite Page" component={FavoritePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
