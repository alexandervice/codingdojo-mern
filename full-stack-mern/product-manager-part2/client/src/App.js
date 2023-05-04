import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "../views/Main"
// import ProductForm from './components/ProductForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          {/* this is the default path */}
          <Route element={<Main/>} path="/home" default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
