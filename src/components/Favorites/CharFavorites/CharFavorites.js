import React, {useContext} from 'react';
import {MarvelContext} from '../../../context/MarvelContext/MarvelProvider';
import Card from '../../Card';

export default function CharFavorites({char}) {
  const {dispatch} = useContext(MarvelContext);

  const handleRemove = id => {
    dispatch({type: 'REMOVE_CHAR', payload: {id}});
  };

  const img = char.thumbnail.path + '/portrait_small.jpg';

  return (
    <Card
      img={img}
      name={char.name}
      buttonTitle="Delete to Favorites"
      handleButton={() => handleRemove(char.id)}
    />
  );
}
