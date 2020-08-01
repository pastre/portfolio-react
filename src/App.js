import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Work from './work/Work';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar sticky={ true } />
      <Home  />
      <Work />
    </div>
  );
}

export default App;
