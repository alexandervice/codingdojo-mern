import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"

const Planets = () => {
  const [planet, setPlanet] = useState({});

  const{index} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/planets/${index}`)
      .then(response => {
        // console.log(response.data.result)
        setPlanet(response.data.results)
      })
      .catch(err=>{
        console.log(err);
      });
  }, [index]);

  return (
    <div>
      <h2>{planet.name}</h2>

    </div>
  )
}

export default Planets