import React from 'react';
import './app.css';
import { GlobalStorage } from './GlobalContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';


function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          {/* <Route path='product/sportshoes' element={< />} /> */}
          <Route path='/loginUser' element={<Login />} />


        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
