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
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' className='form-input mb-5 ml-2 py-0 px-1' value={name} onChange={(e) => setName(e.target.value)}/>
        </h5>
        <div className='formButtons'>
          <CancelButton/>
          <input className='bg-green-200 hover:bg-green-300 rounded px-1 border-solid border-2 border-green-400' type="submit"/>
        </div>
      </form>
    </div>
  )
}
export default AuthorForm;

