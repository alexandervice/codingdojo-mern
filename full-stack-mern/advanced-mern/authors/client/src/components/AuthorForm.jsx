import React, { useState } from 'react'
import CancelButton from './CancelButton';
const AuthorForm= (props) => {
  const {placeholderName, onSubmission, errors} = props;
  const [ name, setName ] = useState(placeholderName);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmission({name})
  }

  return (
    <div className='authorForm'>
      <form onSubmit={onSubmitHandler}>
        {errors.map((err, index) => 
        <p className='error' key={index}>{err}</p>
        )}
        <h5>
          <label htmlFor="name">Name: </label>
          <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </h5>
        <CancelButton/>
        <input type="submit"/>
      </form>
    </div>
  )
}
export default AuthorForm;

