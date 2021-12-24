import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import CharacterCard from '../../components/CharacterCard';
import Search from '../../components/Search';
import styles from './MainStyle';

const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

const Main = () => {
  const navigation = useNavigation();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`,
      );
      setItems(response.data.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [query]);

  const handleCharSelect = item => {
    navigation.navigate('CharDetailPage', {id: item.id});
  };

  const onSearch = text => {
    setQuery(text);
  };

  const handleFavorites = () => {
    navigation.navigate('Favorites');
  };

  const renderChar = ({item}) => (
    <CharacterCard char={item} onPress={() => handleCharSelect(item)} />
  );

  return (
    <View style={styles.container}>
      <Button title="Favorites" onPress={() => handleFavorites()} />
      <Search onSearch={onSearch} />
      <FlatList data={items} renderItem={renderChar} />
      <Text>Main Page</Text>
    </View>
  );
};
export default Main;
