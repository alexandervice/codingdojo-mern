import './App.css';
import React, {useState} from 'react';
import RenderBoxes from './components/RenderBoxes';
import DeclareColor from './components/DeclareColor';

function App() {
  const [boxData, setBoxData] = useState([])

  return (
    <div className="App">
      <DeclareColor boxData = {boxData} setBoxData = {setBoxData}/>
      <RenderBoxes boxData={boxData}/>
    </div>
  );
}

export default App;
