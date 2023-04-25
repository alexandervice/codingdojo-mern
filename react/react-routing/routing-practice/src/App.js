import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home";
import OtherRoutes from "./components/OtherRoutes";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path={`/${OtherRoutes}`} element={<OtherRoutes/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
