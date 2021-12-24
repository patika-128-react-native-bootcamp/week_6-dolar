import React, { useContext } from 'react';
import { View, FlatList, Button, Text } from 'react-native';

import { MarvelContext } from '../../../context/MarvelContext/MarvelProvider';
import CharFavorites from '../../../components/Favorites/CharFavorites';
import ComicFavorites from '../../../components/Favorites/ComicFavorites';
import styles from './FavoritesComicStyle';

export default function FavoritesComic() {
  const { state } = useContext(MarvelContext);

  const renderFavorites = ({ item }) => <CharFavorites char={item} />;
  const renderComic = ({ item }) => <ComicFavorites comic={item} />;

  return (
    <View style={styles.container}>
      <Text></Text>
      <FlatList data={state.char_Favorites} renderItem={renderFavorites} />
      <Text></Text>

      <FlatList data={state.comic_Favorites} renderItem={renderComic} />
    </View>
  );
}
