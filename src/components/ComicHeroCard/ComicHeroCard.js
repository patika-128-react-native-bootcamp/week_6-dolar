import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './ComicHeroCardStyle';

const ComicHeroCard = ({char}) => {
  console.log(char.name);
  const img = char.thumbnail.path + '/portrait_small.jpg';
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: img}} />
      <View>
        <Text style={style.title}> {char.name}</Text>
        <Text style={style.title}> {char.description}</Text>
      </View>
    </View>
  );
};

export default ComicHeroCard;
