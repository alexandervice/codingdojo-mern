import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./views/Main"
import OneAuthor from './components/OneAuthor';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          {/* this is the default path ^ */}
          <Route element={<CreateAuthor/>} path="/author/create"/>
          <Route element={<OneAuthor/>} path="/author/:id"/>
          <Route element={<UpdateAuthor/>} path="/author/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
