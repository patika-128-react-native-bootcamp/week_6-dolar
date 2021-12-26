import React, { useContext, useState } from 'react';
import { View, FlatList,  ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import useFetch from '../../hooks/useFetch';
import CharacterCard from '../../components/CharacterCard';
import Search from '../../components/Search';
import styles from './MainStyle';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';
import DarkMode from '../../style/DarkMode'


const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

const Main = () => {
  const navigation = useNavigation(); 
  const [query, setQuery] = useState('');

  const {theme} = useContext(ThemeContext)


  const { loading, data, error } = useFetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`,query );

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
