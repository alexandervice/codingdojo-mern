import React, { useState } from 'react'
// import axios from 'axios';
const AuthorForm= (props) => {
  const {placeholderName, onSubmission, errors} = props;

  const [ name, setName ] = useState(placeholderName);
  // const [submissionStatus, setSubmissionStatus] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmission({name})
  }

  return (
    <div className='authorForm'>
      <h3>Add a New Author</h3>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => 
        <p className='error' key={index}>{err}</p>
        )}
        <h5>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </h5>
        <button  >Cancel</button>
        <input type="submit"/>
      </form>
    </div>
  )
}
export default AuthorForm;

