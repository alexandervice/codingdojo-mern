import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"

const Planets = () => {
  const [planet, setPlanet] = useState({});

  const{index} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${index}`)
      .then(response => {
        console.log(response.data)
        setPlanet(response.data)
      })
      .catch(err=>{
        console.log(err);
      });
  }, [index]);

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Days per Year: {planet.orbital_period}</p>
    </div>
  )
}

export default Planets