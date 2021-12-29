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
import { BlurView } from "@react-native-community/blur";

const Card = ({ onPress, name, isAdded, handleButton, img, disabled }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container} >
        <Image style={style.image} source={{uri: img}} />
        <View style={style.inner_container}>
          <Text style={style.name}>{name}</Text>  
          <View style={style.button_view}>
            <Pressable onPress={handleButton} disabled={disabled}>
              <Icon
                name={isAdded ? "heart" : "heart-outline"}
                size={32}
                color={isAdded ? "#D65F5f" : "black"}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
