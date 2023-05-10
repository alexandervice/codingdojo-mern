import React from 'react';
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
  const {authorArray, deleteAuthor} = props;
  return (
    <div>
      <Link className='authorItem' to={"/author/create"}><button className='add'>Add a new Author</button></Link>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {
          authorArray.map((author, index)=>{
          return(
            <tr key={index}>
              <td>
                {/* <Link to={`/author/${author._id}`}>{author.name}</Link> */}
                {author.name}
              </td>
              <td>
                <Link className='authorItem' to={`/author/edit/${author._id}`}><button className='edit'>Edit</button></Link>
                <DeleteButton authorId={author._id} successCallback = {()=>deleteAuthor(author._id)}/>
              </td>
            </tr>
          )})
        }
        </tbody>
      </table>
    </div>
  )
}
export default AuthorList;

