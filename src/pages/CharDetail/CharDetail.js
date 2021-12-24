import React from 'react';
import { View, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useComic from '../../hooks/useComic';
import axios from 'axios';
import ComicsCard from '../../components/ComicsCard/ComicsCard';
import styles from './CharDetailStyle';

const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

export default function CharDetail() {
  const route = useRoute();
  const id = route.params.id;

  const { loading, data, error } = useComic(`http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`, id)

  const renderComics = ({ item }) => <ComicsCard comic={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="red" />
  }

  if (error) {
    return <Text>Error {error}</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList data={details} renderItem={renderComics} />
    </View>
  );
}
