import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
  const { authorId, successCallback } = props;
  const deleteAuthor = e => {
    axios.delete(`http://localhost:8000/api/products/delete/${authorId}`)
      .then(res=>{
        successCallback();
      })
      .catch(err=>console.log(err))
  }
  return (
    <button className='productItem' onClick={deleteAuthor}>
      Delete
    </button>
  )
}
export default DeleteButton;

