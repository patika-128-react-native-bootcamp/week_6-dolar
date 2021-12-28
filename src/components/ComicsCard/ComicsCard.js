import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {MarvelContext} from '../../context/MarvelContext/MarvelProvider';
import Card from '../Card';

export default function ComicsCard({comic}) {
  const navigation = useNavigation();
  const {dispatch, state} = useContext(MarvelContext);

  let storedFav = state.comic_Favorites.find(f => f.id === comic.id);
  const isAdded = storedFav ? true : false;

  const img = comic.thumbnail.path + '/portrait_small.jpg';

  const handleComic = () => {
    dispatch({type: 'ADD_COMIC', payload: {comic}});
  };

  const handlePress = id => {
    navigation.navigate('ComicHero', {id});
  };
  console.log(isAdded);
  return (
    <Card
      onPress={() => handlePress(comic.id)}
      img={img}
      name={comic.title}
      handleButton={() => handleComic(comic)}
      isAdded={isAdded}
      disabled={isAdded}
    />
  );
}

// <TouchableOpacity onPress={() => handlePress(comic.id)}>
//   <View style={style.container}>
//     <Image style={style.image} source={{uri: img}} />
//     <View>
//       <Text style={style.title}> {comic.title}</Text>
//       <Button
//         disabled={isAdded}
//         title="add to favorites"
//         onPress={() => handleComic(comic)}
//       />
//     </View>
//   </View>
// </TouchableOpacity>;
