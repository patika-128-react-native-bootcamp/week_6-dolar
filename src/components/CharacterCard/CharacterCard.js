import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Button,
} from 'react-native';
import {MarvelContext} from '../../context/MarvelContext/MarvelProvider';
import style from './CharacterCardStyle';

const CharacterCard = ({char, onPress}) => {
  const {dispatch, state} = useContext(MarvelContext); 

  let storedFav = state.char_Favorites.find(f => f.id === char.id);
  const isAdded = storedFav ? true : false;

  const handleChar = char => {
    dispatch({type: 'ADD_CHAR', payload: {char}});
  };

  const img = char.thumbnail.path + '/portrait_small.jpg';

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={style.container}>
        <Image style={style.image} source={{uri: img}} />
        <View style={style.button}>
          <Text style={style.name}>{char.name}</Text>
          <Button
            disabled={isAdded}
            title="add to favorites"
            onPress={() => handleChar(char)}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CharacterCard;
