import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import AuthorForm from './AuthorForm';

const CreateAuthor = (props) => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const createAuthor = AuthorData => {
    axios.post('http://localhost:8000/api/authors/create', AuthorData)
    .then(res=>{
        console.log(res.data);
        navigate("/");
      })
      .catch(err=> {
        console.log(AuthorData)
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

  return (
    <div>
      <h3 className=' font-bold'>Add a new Author:</h3>
      <div>
        <AuthorForm onSubmission={createAuthor} placeholderName={""} errors={errors}/>
      </div>
    </div>
  )
}
export default CreateAuthor;

