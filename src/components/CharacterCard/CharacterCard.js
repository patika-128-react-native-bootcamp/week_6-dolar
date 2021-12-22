import React from 'react';
import {View, Text, TouchableOpacity, Image, Button} from 'react-native';
import style from './CharacterCardStyle';

const CharacterCard = ({char, onPress}) => {
  const img = char.thumbnail.path + '/portrait_small.jpg';
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}> {char.name}</Text>
          <Button title="add to favorites" onPress={null} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CharacterCard;
