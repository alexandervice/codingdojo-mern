import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useParams} from "react-router-dom"

const Planets = () => {
  const [people, setPeople] = useState({});

  const{index} = useParams();

  useEffect(() => {
    axios.get(`https://swapi.dev/people/${index}`)
      .then(response => {
        // console.log(response.data.result)
        setPeople(response.data.results)
      })
      .catch(err=>{
        console.log(err);
      });
  }, [index]);

  return (
    <div>
      <h2>{people.name}</h2>

    </div>
  )
}

export default Planets