import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./views/Main"
import OneProduct from "./components/OneProduct"
import UpdateProduct from './components/UpdateProduct';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          {/* this is the default path */}
          <Route element={<Main/>} path="/" default/>
          <Route element={<OneProduct/>} path="/product/:id"/>
          <Route element={<UpdateProduct/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
