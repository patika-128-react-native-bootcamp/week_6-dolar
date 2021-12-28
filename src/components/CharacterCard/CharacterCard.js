import React, {useContext} from 'react';
import {MarvelContext} from '../../context/MarvelContext/MarvelProvider';
import Card from '../Card';

const CharacterCard = ({char, onPress}) => {
  const {dispatch, state} = useContext(MarvelContext);

  let storedFav = state.char_Favorites.find(f => f.id === char.id);
  const isAdded = storedFav ? true : false;

  const handleChar = char => {
    dispatch({type: 'ADD_CHAR', payload: {char}});
  };

  const img = char.thumbnail.path + '/portrait_small.jpg';

  return (
    <Card
      onPress={onPress}
      img={img}
      name={char.name}
      buttonTitle="add to favorites"
      handleButton={() => handleChar(char)}
      isAdded={isAdded}
    />
  );
};
export default CharacterCard;
