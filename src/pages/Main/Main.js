import React, { useState, useEffect } from 'react';
import { View, Text, Flatlist, FlatList } from 'react-native';
import CharacterCard from '../../components/CharacterCard';
import Search from '../../components/Search';
import axios from 'axios';


const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

const Main = () => {

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



  const onSearch = text => {
    setQuery(text);
  };


  const renderChar = ({ item }) => <CharacterCard char={item} />;

  return (
    <View>
      <Search onSearch={onSearch} />
      <FlatList data={items} renderItem={renderChar} />
      <Text>Main Page</Text>
    </View>
  );
};
export default Main;