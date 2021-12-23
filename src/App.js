import React from 'react';
import MarvelProvider from './context/MarvelContext/MarvelProvider';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    
    <MarvelProvider>
      <Navigation />
    </MarvelProvider>
  );
}
