import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {MarvelContext} from '../../../context/MarvelContext/MarvelProvider';
import style from './ComicFavoritesStyle';

export default function ComicFavorites({comic}) {
  const {dispatch, state} = useContext(MarvelContext);

  const handleRemove = id => {
    dispatch({type: 'REMOVE_COMIC', payload: {id}});
  };

  const img = comic.thumbnail.path + '/portrait_small.jpg';

  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}> {comic.title}</Text>
          <Button
            title="deleteeee to favorites"
            onPress={() => handleRemove()}
          />
        </View>
      </View>
    </TouchableOpacity>
  ); 
}
