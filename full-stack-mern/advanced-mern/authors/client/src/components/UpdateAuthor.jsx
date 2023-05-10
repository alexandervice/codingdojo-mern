import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import AuthorForm from './AuthorForm';
// import DeleteButton from './DeleteButton';

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
        setAuthor(res.data.author)
        console.log(res.data.author)
        res.data.author ?
        setLoaded(true) :
        setLoaded(false)
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

  // const deleteAuthor = (id) => {
  //   console.log("deleted?")
  //   // navigate("/");
  //   // setAuthor(author.filter(author => author.id !== id));
  // }

  return (
    <div>
      <h3 className=' font-bold'>Edit this Author:</h3>
      {loaded? 
      <div>
        <AuthorForm onSubmission={updateAuthor} placeholderName={author.name} errors={errors}/>
        {/* <DeleteButton productId={id} successCallback = {()=>deleteAuthor(id)}/> */}
      </div>:
      <div>
        <p>"We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?"</p>
        <Link className='authorItem ' to={"/author/create"}><button className='bg-purple-100 hover:bg-purple-200 rounded px-1 border-solid border-2 mt-3 border-purple-500 mb-5'>Add a new Author</button></Link>
      </div>}
    </div>
  )
}
export default UpdateAuthor;

