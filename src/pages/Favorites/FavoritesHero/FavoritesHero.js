import React, { useContext } from 'react';
import { View, FlatList, Button, Text } from 'react-native';

import { MarvelContext } from '../../../context/MarvelContext/MarvelProvider';
import CharFavorites from '../../../components/Favorites/CharFavorites';
import styles from './FavoritesHeroStyle';
import DarkMode from '../../../style/DarkMode'
import { ThemeContext } from '../../../context/ThemeContext/ThemeProvider';

export default function FavoritesHero() {

  const {theme} = useContext(ThemeContext)
  const { state } = useContext(MarvelContext);

  const renderFavorites = ({ item }) => <CharFavorites char={item} />;
 
  

  return (
    <View style={ theme == "dark" ? DarkMode.container : styles.container}>
      <FlatList data={state.char_Favorites} renderItem={renderFavorites} />
    
    </View>
  );
}
