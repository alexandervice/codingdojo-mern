import React from 'react'
import {useNavigate} from "react-router-dom";
const CancelButton = (props) => {
  const navigate = useNavigate();
  const cancel = e => {
    navigate("/");
  }
  return (
    <button className='authorItem mr-5 bg-yellow-200 hover:bg-yellow-300 rounded px-1 border-solid border-2 border-yellow-400' onClick={cancel}>Cancel</button>
  )
}
export default CancelButton;

