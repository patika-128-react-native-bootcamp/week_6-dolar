import React, { useContext, useState } from 'react';
import { View, FlatList, ActivityIndicator, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import CharacterCard from '../../components/CharacterCard';
import Search from '../../components/Search';
import styles from './MainStyle';
import constants from '../../configs/constants';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../style/DarkMode'
import Header from '../../components/Header';

const { baseUrl, ts, apiKey, hash } = constants;

const Main = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  const { theme } = useContext(ThemeContext)

  const { loading, data, error } = useFetch(`${baseUrl}${query}${ts}${apiKey}${hash}`, query);

  const handleCharSelect = item => {
    navigation.navigate('CharDetailPage', { id: item.id });
  };

  const onSearch = text => {
    setQuery(text);
  };

  const renderChar = ({ item }) => (
    <CharacterCard char={item} onPress={() => handleCharSelect(item)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="red" />
  }

  return (
    <View style={theme == "dark" ? DarkMode.container : styles.container}>
      <Header />
      <Search onSearch={onSearch} placeholder="Kahraman Ara...✍️" />
      <ImageBackground style={styles.background} source={require('../../assets/heros.png')} >
      <FlatList data={data} renderItem={renderChar} />
      </ImageBackground>   
    </View>
  );
};
export default Main;

