import React, {useEffect, useState} from "react";
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        // not the actual JSON response body but the entire HTTP response
        return response.json();
      }).then(response => {
        // we now run another promise to parse the HTTP response into usable JSON
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
  }, [pokemonList]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
