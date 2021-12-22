import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import ComicsCard from '../../components/ComicsCard/ComicsCard';

const hash = '0519bdb5cdd72539b81dfca9cca4dd5b';

export default function CharDetail() {
  const route = useRoute();
  const id = route.params.id;

  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(
        `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=1e4c7fa786a6b13494126a8d82f41974&hash=${hash}`,
      );
      setDetails(response.data.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderComics = ({item}) => <ComicsCard comic={item} />;

  return (
    <View>
      <FlatList data={details} renderItem={renderComics} />
    </View>
  );
}
