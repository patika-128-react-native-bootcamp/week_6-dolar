import React, { useContext } from 'react';
import { View, FlatList, Button, Text } from 'react-native';

import { MarvelContext } from '../../../context/MarvelContext/MarvelProvider';
import CharFavorites from '../../../components/Favorites/CharFavorites';
import ComicFavorites from '../../../components/Favorites/ComicFavorites';
import styles from './FavoritesComicStyle';
import { ThemeContext } from '../../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../../style/DarkMode'

export default function FavoritesComic() {

  const {theme} = useContext(ThemeContext)
  const { state } = useContext(MarvelContext);

 
  const renderComic = ({ item }) => <ComicFavorites comic={item} />;

  return (
    <View style={ theme == "dark" ? DarkMode.container: styles.container}>
    


      <FlatList data={state.comic_Favorites} renderItem={renderComic} />
    </View>
  );
}
