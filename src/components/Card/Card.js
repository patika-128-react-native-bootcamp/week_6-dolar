import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
  Pressable,
  Image,
} from 'react-native';
import style from './CardStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = ({ onPress, name, isAdded, handleButton, img, disabled }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}>{name}</Text>
          <View style={style.button}>
            <Pressable onPress={handleButton} disabled={disabled}>
              <Icon
                name={isAdded ? "heart" : "heart-outline"}
                size={32}
                color={isAdded ? "red" : "black"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
