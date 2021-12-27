import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import {MarvelContext} from '../../../context/MarvelContext/MarvelProvider';
import style from './CharFavoritesStyle';

export default function CharFavorites({char}) {
  const {dispatch} = useContext(MarvelContext);

  const handleRemove = id => {
    dispatch({type: 'REMOVE_CHAR', payload: {id}});
  };

  const img = char.thumbnail.path + '/portrait_small.jpg';

  console.log(char)
  return (
    <TouchableOpacity>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}> {char.title}</Text>
          <Button
            title="delete to favoritessssdasdsad"
            onPress={() => handleRemove(char.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

