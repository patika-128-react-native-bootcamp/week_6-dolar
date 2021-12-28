import React, {useContext} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import useFetch from '../../hooks/useFetch';
import { constants } from '../../configs/constants';
import styles from './ComicHeroStyle';
import DarkMode from '../../style/DarkMode';
import ComicHeroCard from '../../components/ComicHeroCard';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import { useRoute } from '@react-navigation/native';



const ComicHero = () => {
  const route = useRoute();
  const id = route.params.id;
  console.log(id)

  const {theme} = useContext(ThemeContext)
  const {loading, data, error} = useFetch(
    `${constants.comic_baseUrl}${id}/characters?ts=${constants.ts}&apikey=${constants.apiKey}&hash=${constants.hash}`,
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
