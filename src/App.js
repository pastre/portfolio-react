import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar sticky={ true } />
      <Home  />
    </div>
  );
}

export default App;
