import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import AuthorForm from './AuthorForm';
import DeleteButton from './DeleteButton';

const UpdateAuthor = (props) => {
  const { id } = useParams();
  const [author, setAuthor] = useState({});
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] =useState(false)
  // const [ name, setName ] = useState("");
  // const [ price, setPrice ] = useState(0);
  // const [ description, setDescription ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/find/${id}`)
      .then(res => {
        
        res.data.author ?
        setLoaded(false) :
        setAuthor(res.data.author)
        setLoaded(true)
        console.log(res.data.author)
      })
        .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateAuthor = authorData => {
    axios.patch(`http://localhost:8000/api/authors/update/${id}`, authorData)
      .then(res => {
        console.log(res);
        navigate("/"); // this will take us back to the Main.js
      })
      .catch(err => {
        console.log(err)
        const errorResponse = err.response.data.errors;
        const errorArray = [];
        for (const key of Object.keys(errorResponse)) {
          errorArray.push(errorResponse[key].message)
        }
        setErrors(errorArray)
        console.log(errors)
      })
  }

  const deleteAuthor = (id) => {
    navigate("/");
    setAuthor(author.filter(author => author.id !== id));
  }

  return (
    <div>
      <h3>Edit this Author:</h3>
      {loaded? 
      <div>
        {author.name}
        <AuthorForm onSubmission={updateAuthor} placeholderName={author.name} errors={errors}/>
        <DeleteButton productId={id} successCallback = {()=>deleteAuthor(id)}/>
      </div>:
      <div>
        <p>"We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?"</p>
        <Link className='authorItem' to={"/author/create"}><button>Add a new Author</button></Link>
      </div>}
    </div>
  )
}
export default UpdateAuthor;

