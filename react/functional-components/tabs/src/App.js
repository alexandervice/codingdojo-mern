import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';

function App() {
  const[tabArray, setTabArray] = useState([]);
  setTabArray(["Tab content 1", "Tab content 2", "Tab content 3"])
  return (
    <div className="App">
      <Tabs tabArray = {tabArray}/>
    </div>
  );
}

export default App;
