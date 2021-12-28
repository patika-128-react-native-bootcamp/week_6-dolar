import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Image,
} from 'react-native';
import style from './CardStyle';

const Card = ({onPress, name, isAdded, handleButton, img, buttonTitle}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}>{name}</Text>
          <Button
            disabled={isAdded}
            title={buttonTitle}
            onPress={handleButton}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
