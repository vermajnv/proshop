import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './assets/styles/bootstap.custom.css';
import './assets/styles/index.css'
import App from './App';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route index={true} element={<HomeScreen />}></Route>
          <Route path='product/:id' element={<ProductScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
