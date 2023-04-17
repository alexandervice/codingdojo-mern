import './App.css';
import React, {useState} from 'react';
import MakeList from './components/MakeList';
import RenderTodoList from './components/RenderTodoList';

function App() {
  const [todoArray, setTodoArray] = useState([])
  return (
    <div className="App">
      <MakeList todoArray = {todoArray} setTodoArray = {setTodoArray}/>
      <RenderTodoList todoArray = {todoArray} setTodoArray = {setTodoArray} />
    </div>
  );
}

export default App;
