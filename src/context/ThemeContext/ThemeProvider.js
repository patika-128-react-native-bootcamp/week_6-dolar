import React, {createContext, useEffect, useReducer, useState} from 'react';
import {Appearance} from 'react-native';
import ThemeReducer from './ThemeReducer';
import ThemeStore from './ThemeStore';

export const ThemeContext = createContext();

export default function ThemeProvider({children}) { 

  const [state, dispatch] = useReducer(ThemeReducer, ThemeStore);

  const {theme} = state


  
 
  // useEffect(() => {
  //   Appearance.addChangeListener(scheme => {
  //     setTheme(scheme.colorScheme);
  //   });
  // }, [theme]);


  // Appearance.getColorScheme()
  return (
    <ThemeContext.Provider
      value={{
        theme,
        dispatch
      }}>
      {children}
    </ThemeContext.Provider>
  );
} 
