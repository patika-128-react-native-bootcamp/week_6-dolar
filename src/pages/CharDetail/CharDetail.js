import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import ComicsCard from '../../components/ComicsCard/ComicsCard';
import styles from './CharDetailStyle';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';

import DarkMode from '../../style/DarkMode'
 
const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

export default function CharDetail() {
  const {theme} = useContext(ThemeContext)
  const route = useRoute();
  const id = route.params.id;

  const { loading, data, error } = useFetch(`http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`, id)

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
