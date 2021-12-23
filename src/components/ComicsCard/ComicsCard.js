import React, {useContext} from 'react';
import {View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {MarvelContext} from '../../context/MarvelContext/MarvelProvider';

import style from './ComicCard.style';

export default function ComicsCard({comic}) {
  const {dispatch, state} = useContext(MarvelContext);

  let storedFav = state.comic_Favorites.find(f => f.id === comic.id);
  const isAdded = storedFav ? true : false;

  const img = comic.thumbnail.path + '/portrait_small.jpg';

  const handleComic = () => {
    dispatch({type: 'ADD_COMIC', payload: {comic}});
  };

  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View>
          <Text style={style.title}> {comic.title}</Text>
          <Button
            disabled={isAdded}
            title="add to favorites"
            onPress={() => handleComic(comic)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
