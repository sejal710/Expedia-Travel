import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContaxtProvider from './Contaxt/AuthContaxt';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>\
  <AuthContaxtProvider>
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </AuthContaxtProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
