import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import { constants } from '../../configs/constants';
import ComicsCard from '../../components/ComicsCard/ComicsCard';
import styles from './CharDetailStyle';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';

import DarkMode from '../../style/DarkMode'

export default function CharDetail() {
  const {theme} = useContext(ThemeContext)
  const route = useRoute();
  const id = route.params.id;

  const { loading, data, error } = useFetch(`${constants.charDetail_baseUrl}${id}/comics?ts=${constants.ts}&apikey=${constants.apiKey}&hash=${constants.hash}`, id);

  const renderComics = ({ item }) => <ComicsCard comic={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="red" />
  }

  if (error) {
    return <Text>Error {error}</Text>
  }

  return (
    <View style={theme == "dark" ? DarkMode.container : styles.container}>
      <FlatList data={data} renderItem={renderComics} />
    </View>
  );
}
