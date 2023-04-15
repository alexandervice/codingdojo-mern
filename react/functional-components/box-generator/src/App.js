import './App.css';
import React, {useState} from 'react';
import CreateBox from './components/CreateBox';
import DeclareColor from './components/DeclareColor';

function App() {
  const [currentColor, setCurrentColor] = useState("")
  const changeColor = (newColor) => {
    setCurrentColor(newColor)
  }
  return (
    <div className="App">
      
      <CreateBox color={currentColor}/>
    </div>
  );
}

export default App;
