import React, {createContext, useEffect, useReducer} from 'react';
import MarvelReducer from './MarvelReducer';
import MarvelStore from './MarvelStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [state, dispatch] = useReducer(MarvelReducer, MarvelStore);

  const { char_Favorites, comic_Favorites } = state;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@char');
      return jsonValue != null ? dispatch({type:"SET_DATA", payload: JSON.parse(jsonValue)})  : null;
    } catch (e) {
      // error reading value
    }
  };

  const getComic = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@comic');
      return jsonValue != null ? dispatch({ type: "SET_DATA", payload: JSON.parse(jsonValue) }) : null;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData()
    getComic()
  }, [])

  const storeData = async char_Favorites => {
    try {
      const jsonValue = JSON.stringify(char_Favorites);
      await AsyncStorage.setItem('@char', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const storeComic = async comic_Favorites => {
    try {
      const jsonValue = JSON.stringify(comic_Favorites);
      await AsyncStorage.setItem('@comic', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    storeData(char_Favorites);
    storeComic(comic_Favorites);
  }, [state]);

  return (
    <MarvelContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </MarvelContext.Provider>
  );
}
