const MarvelReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        char_Favorites: action.payload
        
      }
    case 'ADD_CHAR': {
      const selectedChar = action.payload.char;

      const UpdatedFavorites = [selectedChar, ...state.char_Favorites];

      return {...state, char_Favorites: UpdatedFavorites};
    }
    case 'REMOVE_CHAR': {
      const selectedChar = action.payload;

      const charFavoritesIndex = state.char_Favorites.findIndex(
        f => f.id === selectedChar.id,
      );

      const UpdatedFavoritesList = [...state.char_Favorites];
      UpdatedFavoritesList.splice(charFavoritesIndex, 1);

      return {...state, char_Favorites: UpdatedFavoritesList};
    }
    case 'ADD_COMIC': {
      const selectedComic = action.payload.comic;

      const UpdatedFavorites = [selectedComic, ...state.comic_Favorites];

      return {...state, comic_Favorites: UpdatedFavorites};
    }
    case 'REMOVE_COMIC': {
      const selectedComic = action.payload;

      const comicFavoritesIndex = state.comic_Favorites.findIndex(
        f => f.id === selectedComic.id,
      );

      const UpdatedFavoritesList = [...state.comic_Favorites];
      UpdatedFavoritesList.splice(comicFavoritesIndex, 1);

      return {...state, comic_Favorites: UpdatedFavoritesList};
    }

    default:
      return state;
  }
};

export default MarvelReducer;

// return {
//   ...state,
//   char_Favorites: state.char_Favorites.filter(
//     char => char.id !== action.payload,
//   ),
// };

// const charFavoritesIndex = state.char_Favorites.findIndex(
//   f => f.id === selectedChar.id,
// );

// {
//   const selectedChar = action.payload.char;

//   const charFavoritesIndex = state.char_Favorites.findIndex(
//     f => f.id === selectedChar.id,
//   );

//   const UpdatedFavoritesList = [...state.char_Favorites];
//   UpdatedFavoritesList.splice(charFavoritesIndex, 1);

//   return {...state, char_Favorites: UpdatedFavoritesList};
// }
