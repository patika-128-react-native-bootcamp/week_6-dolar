import React, {useContext} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import useFetch from '../../hooks/useFetch';
import constants from '../../configs/constants';
import styles from './ComicHeroStyle';
import DarkMode from '../../style/DarkMode';
import ComicHeroCard from '../../components/ComicHeroCard';
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';
import {useRoute} from '@react-navigation/native';

const {comic_baseUrl, ts, apiKey, hash} = constants;

const ComicHero = () => {
  const route = useRoute();
  const id = route.params.id;

  const {theme} = useContext(ThemeContext);
  const {loading, data, error} = useFetch(
    `${comic_baseUrl}${id}/characters?${ts}${apiKey}${hash}`,
    id,
  );

  const renderChar = ({item}) => <ComicHeroCard char={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  return (
    <View style={theme == 'dark' ? DarkMode.container : styles.container}>
      <FlatList data={data} renderItem={renderChar} />
    </View>
  );
};
export default ComicHero;
