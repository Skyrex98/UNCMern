import React from 'react';
import Count from './components/Count';
import Noah from './components/Noah';
import { CountProvider } from './utils/GlobalState';
import './App.css';

function App() {
  return (
    <CountProvider>
      <Count />
      <Noah />
    </CountProvider>
  );
}

export default App;
