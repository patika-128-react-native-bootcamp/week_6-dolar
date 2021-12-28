import React, { useContext, useState } from 'react';
import { View, FlatList,  ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';


import useFetch from '../../hooks/useFetch';
import CharacterCard from '../../components/CharacterCard';
import Search from '../../components/Search';
import styles from './MainStyle';
import constants from '../../configs/constants';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../style/DarkMode'

<<<<<<< HEAD
const { baseUrl, ts, apiKey, hash } = constants;
=======
const {baseUrl,ts,apiKey,hash} = constants
>>>>>>> cc173131b026c1971e1d449e9c431bd5e991e988

const Main = () => {
  const navigation = useNavigation(); 
  const [query, setQuery] = useState('');

  const { theme } = useContext(ThemeContext)

<<<<<<< HEAD
  const { loading, data, error } = useFetch(`${baseUrl}${query}${ts}${apiKey}${hash}`, query);
=======
  const { loading, data } = useFetch(`${baseUrl}${query}${ts}${apiKey}${hash}`, query);
>>>>>>> cc173131b026c1971e1d449e9c431bd5e991e988

  const handleCharSelect = item => {
    navigation.navigate('CharDetailPage', {id: item.id});
  };

  const onSearch = text => {
    setQuery(text);
  };

  const renderChar = ({item}) => (
    <CharacterCard char={item} onPress={() => handleCharSelect(item)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="red" />
  }

  return (
    <View style={theme == "dark" ? DarkMode.container : styles.container}>
      <Search onSearch={onSearch} placeholder="Kahraman Ara..." />
      <FlatList data={data} renderItem={renderChar} />
    </View>
  );
};
export default Main;
