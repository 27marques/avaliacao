import { ButtonClasses, ButtonBase } from '@mui/material'
import './App.css';
import FetchProducts from './components/FetchProducts';
import React from 'react';
import car from './images/car.jpg'; // gives image path



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <FetchProducts />
      </header>
    </div>
  );
  return (
    <div>
      <img src={car} alt="this is car image" />
    </div>
  );
}

export default App;

