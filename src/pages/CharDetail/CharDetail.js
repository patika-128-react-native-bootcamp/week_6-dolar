<<<<<<< HEAD
import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
=======
import React, {useContext} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';
>>>>>>> cc173131b026c1971e1d449e9c431bd5e991e988

import useFetch from '../../hooks/useFetch';
import constants from '../../configs/constants';
import ComicsCard from '../../components/ComicsCard/ComicsCard';
import styles from './CharDetailStyle';
<<<<<<< HEAD
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../style/DarkMode'

const { charDetail_baseUrl, ts, apiKey, hash } = constants;
=======
import {ThemeContext} from '../../context/ThemeContext/ThemeProvider';

import DarkMode from '../../style/DarkMode';

const {apiKey, charDetail_baseUrl, ts,hash} = constants;
>>>>>>> cc173131b026c1971e1d449e9c431bd5e991e988

export default function CharDetail() {
  const {theme} = useContext(ThemeContext);
  const route = useRoute();
  const id = route.params.id;

<<<<<<< HEAD
  const { loading, data, error } = useFetch(`${charDetail_baseUrl}${id}/comics?${ts}${apiKey}${hash}`, id);
=======
  const {loading, data, error} = useFetch(
    `${charDetail_baseUrl}${id}/comics?${ts}${apiKey}${hash}`,
    id,
  );
>>>>>>> cc173131b026c1971e1d449e9c431bd5e991e988

  const renderComics = ({item}) => <ComicsCard comic={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Error {error}</Text>;
  }

  return (
    <View style={theme == 'dark' ? DarkMode.container : styles.container}>
      <FlatList data={data} renderItem={renderComics} />
    </View>
  );
}
