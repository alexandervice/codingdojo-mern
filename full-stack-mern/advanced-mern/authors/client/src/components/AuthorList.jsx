import React from 'react';
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
  const {authorArray, deleteAuthor} = props;
  return (
    <div>
      <table>
        <tr>
          <th>Author</th>
          <th>Actions Available</th>
        </tr>
      {
        authorArray.map((author, index)=>{
        return(
          <tr>
            <td><Link to={`/author/${author._id}`}>{author.name}</Link></td>
            <td>
              <Link className='authorItem' to={`/author/edit/${author._id}`}><button>Edit</button></Link>
              <DeleteButton authorId={author._id} successCallback = {()=>deleteAuthor(author._id)}/>
            </td>
          </tr>
        )})
      }
      </table>
    </div>
  )
}
export default AuthorList;

