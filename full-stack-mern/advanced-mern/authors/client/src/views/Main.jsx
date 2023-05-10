import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
const Main = (props) => {
  const [authorArray, setAuthorArray] = useState([]);
  // const [errors, setErrors] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors/find/all")
      .then((res)=>{
        // console.log(res.data.authors);
        setAuthorArray(res.data.authors);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorArray.length])

  // const updateAuthorArray = async () => {

  // }

  const deleteAuthor = (id) => {
    // window.location.reload(false);
    setAuthorArray(authorArray.filter(author => author.id !== id));
  }

  // const createAuthor = AuthorData => {
  //   axios.post('http://localhost:8000/api/authors/create', AuthorData)
  //     .then(res=>{
  //       // console.log(res);
  //       // console.log(res.data);
  //       window.location.reload(false)
  //       setAuthorArray([...authorArray, res.data])
  //     })
  //     .catch(err=> {
  //       console.log(err)
  //       const errorResponse = err.response.data.errors;
  //       const errorArray = [];
  //       for (const key of Object.keys(errorResponse)) {
  //         errorArray.push(errorResponse[key].message)
  //       }
  //       setErrors(errorArray)
  //       console.log(errors)
  //     })
  // }
  
  return (
    <div>
      {/* <AuthorForm onSubmission={createAuthor} placeholderName = "" errors={errors}/>
        <hr/> */}
      <AuthorList authorArray={authorArray} deleteAuthor={deleteAuthor}/>
    </div>
  )
}
export default Main;
