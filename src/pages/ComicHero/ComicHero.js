import React, {useContext, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import useFetch from '../../hooks/useFetch';
import CharacterCard from '../../components/CharacterCard';
import styles from './ComicHeroStyle';
import DarkMode from '../../style/DarkMode';
import ComicHeroCard from '../../components/ComicHeroCard';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import { useRoute } from '@react-navigation/native';

const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

const ComicHero = () => {
  const route = useRoute();
  const id = route.params.id;
  console.log(id)

  const {theme} = useContext(ThemeContext)
  const {loading, data, error} = useFetch(
    `http://gateway.marvel.com/v1/public/comics/${id}/characters?ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`,
    id,
  );

  const renderChar = ({item}) => (
    <ComicHeroCard char={item}  />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  console.log(data)

  return (
    <View style={theme == 'dark' ? DarkMode.container : styles.container}>
      
      <FlatList data={data} renderItem={renderChar} />
    </View>
  );
};
export default ComicHero;
