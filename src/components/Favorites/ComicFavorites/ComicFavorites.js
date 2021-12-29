import React, {useContext} from 'react';
import {MarvelContext} from '../../../context/MarvelContext/MarvelProvider';
import Card from '../../Card';

export default function ComicFavorites({comic}) {
  const { dispatch, state } = useContext(MarvelContext);

  let storedFav = state.comic_Favorites.find(f => f.id === comic.id);
  const isAdded = storedFav ? true : false;

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
      isAdded={isAdded}
      disabled={!isAdded}
    />
  );
}
