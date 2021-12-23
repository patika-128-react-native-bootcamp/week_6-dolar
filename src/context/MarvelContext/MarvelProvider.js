import React, {createContext, useReducer} from 'react';
import MarvelReducer from './MarvelReducer';
import MarvelStore from './MarvelStore';

export const MarvelContext = createContext();

export default function MarvelProvider({children}) {
  const [state, dispatch] = useReducer(MarvelReducer, MarvelStore);


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
