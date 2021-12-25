import React, { useContext } from 'react';
import { View, FlatList, Button, Text } from 'react-native';

import { MarvelContext } from '../../../context/MarvelContext/MarvelProvider';
import CharFavorites from '../../../components/Favorites/CharFavorites';
import styles from './FavoritesHeroStyle';

export default function FavoritesHero() {
  const { state } = useContext(MarvelContext);

  const renderFavorites = ({ item }) => <CharFavorites char={item} />;
 
  

  return (
    <View style={styles.container}>
      <FlatList data={state.char_Favorites} renderItem={renderFavorites} />
    
    </View>
  );
}
