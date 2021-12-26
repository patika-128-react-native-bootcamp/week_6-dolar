import React from 'react';
import MarvelProvider from './context/MarvelContext/MarvelProvider';
import ThemeProvider from './context/ThemeContext/ThemeProvider';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <ThemeProvider>
      <MarvelProvider>
        <Navigation />
      </MarvelProvider>
    </ThemeProvider>
  );
}
