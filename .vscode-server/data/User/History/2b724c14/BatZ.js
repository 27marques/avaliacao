import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Contato from './components/Contato';
import ErrorPage from './components/ErrorPage';
import FetchNews from './components/FetchNews';
import Sobre from './components/Sobre';
//import Noticias from './components/Noticias';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route>
      <Route path="/" element={<Root/>} errorElement={ErrorPage}/>
      <Route path="/noticias" element={<FetchNews/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      </Route>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
