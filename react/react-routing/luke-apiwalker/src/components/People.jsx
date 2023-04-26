import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"

const Planets = () => {
  const [people, setPeople] = useState({});

  const{index} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${index}`)
      .then(response => {
        console.log(response.data)
        setPeople(response.data)
      })
      .catch(err=>{
        console.log(err);
      });
  }, [index]);

  return (
    <div>
      <h2>{people.name}</h2>
      <p>Gender: {people.gender}</p>
      <p>Height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Skin Color: {people.skin_color}</p>
      <p>Hair Color: {people.hair_color}</p>
    </div>
  )
}

export default Planets