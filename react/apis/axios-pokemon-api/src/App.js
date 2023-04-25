import React, {useEffect, useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1010")
      .then(response => {
        // console.log(response.data.results)
        setPokemonList(response.data.results)
      })
      .catch(err=>{
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {
        pokemonList.map((list, index) => {
          return(
            <li key={index}>{list.name}</li>
          )
        })
      }
    </div>
  );
}

export default App;