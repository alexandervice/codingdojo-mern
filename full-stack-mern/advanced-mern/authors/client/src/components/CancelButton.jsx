import React from 'react'
import {useNavigate} from "react-router-dom";
const CancelButton = (props) => {
  const navigate = useNavigate();
  const cancel = e => {
    navigate("/");
  }
  return (
    <button className='authorItem cancel' onClick={cancel}>Cancel</button>
  )
}
export default CancelButton;

