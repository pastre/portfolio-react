import React from 'react';
import logo from './logo.svg';
// import Home from './home/Home';
import Navbar from './navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar sticky={ true } />
    </div>
  );
}

export default App;
