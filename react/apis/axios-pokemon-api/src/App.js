import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1010")
      .then(response => {
        setPokemonList(response.results)
      })
  }, []);

  return (
    <div className="App">
      {
        pokemonList.map((list, index) => {
          return(
            <p key={index}>{list.name}</p>
          )
        })
      }
    </div>
  );
}

export default App;