import { ButtonClasses, ButtonBase } from '@mui/material'
import './App.css';
import FetchProducts from './components/FetchProducts';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, View } from "react-native";




function App() {
  const styles = StyleSheet.create({});
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <FetchProducts />
      </header>
    </div>
  );
}

export default App;
