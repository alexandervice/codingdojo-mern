import React, { useEffect, useState } from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
  const { authorId, successCallback } = props;
  const [authorArray, setAuthorArray] = useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors/find/all")
      .then((res)=>{
        setAuthorArray(res.data.authors);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const deleteAuthor = e => {
    axios.delete(`http://localhost:8000/api/authors/delete/${authorId}`)
      .then(res=>{
        setAuthorArray(authorArray.filter(author => author.id !== authorId));
        successCallback();
        console.log("Author deleted")
      })
      .catch(err=>console.log(err))
  }
  return (
    <button className='authorItem delete' onClick={deleteAuthor}>
      Delete
    </button>
  )
}
export default DeleteButton;

