import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contato from './components/Contato';
import ErrorPage from './components/ErrorPage';
import FetchNews from './components/FetchNews';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>
  },
 {
  path: '/noticias',
  element: <FetchNews/>
 },
 {
  path: '/contato',
  element: <Contato />
 }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
