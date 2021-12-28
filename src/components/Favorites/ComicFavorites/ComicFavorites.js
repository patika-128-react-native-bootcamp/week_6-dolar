import React, {useContext} from 'react';
import {MarvelContext} from '../../../context/MarvelContext/MarvelProvider';
import Card from '../../Card';

export default function ComicFavorites({comic}) {
  const {dispatch} = useContext(MarvelContext);

  const handleRemove = id => {
    dispatch({type: 'REMOVE_COMIC', payload: {id}});
  };

  const img = comic.thumbnail.path + '/portrait_small.jpg';

  return (
    <Card
      img={img}
      name={comic.title}
      buttonTitle="Delete to favorites"
      handleButton={() => handleRemove(comic.id)}
    />
  );
}
