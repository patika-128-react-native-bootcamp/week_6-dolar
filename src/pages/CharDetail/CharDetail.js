import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import constants from '../../configs/constants';
import ComicsCard from '../../components/ComicsCard/ComicsCard';
import styles from './CharDetailStyle';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../style/DarkMode'
import Header from '../../components/Header';

const { charDetail_baseUrl, ts, apiKey, hash } = constants;


export default function CharDetail() {
  const {theme} = useContext(ThemeContext);
  const route = useRoute();
  const id = route.params.id;

  const { loading, data, error } = useFetch(`${charDetail_baseUrl}${id}/comics?${ts}${apiKey}${hash}`, id);

  const renderComics = ({item}) => <ComicsCard comic={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>Error {error}</Text>;
  }

  return (
    <View style={theme == 'dark' ? DarkMode.container : styles.container}>
      <Header />
      <FlatList data={data} renderItem={renderComics} />
    </View>
  );
}
