import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import style from './ComicCard.style';

export default function ComicsCard({comic}) {
  const img = comic.thumbnail.path + '/portrait_small.jpg';

  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: img}} />
      <View>
        <Text style={style.title}>hey {comic.title}</Text>
        <Button title="add to favorites" onPress={null} />
      </View>
    </View>
  );
}
