import React from 'react';
import {Link} from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
  const {authorArray, deleteAuthor} = props;
  return (
    <div>
      <Link className='authorItem ' to={"/author/create"}><button className='bg-purple-100 hover:bg-purple-200 rounded px-1 border-solid border-2 border-purple-500 mb-5'>Add a new Author</button></Link>
      <table className='table-auto border border-slate-500  border border-slate-500 font-semibold text-slate-900 text-left'>
        <thead className='bg-slate-100'>
          <tr>
            <th className='p-2'>Author</th>
            <th className='p-2'>Actions Available</th>
          </tr>
        </thead>
        <tbody>
        {
          authorArray.map((author, index)=>{
          return(
            <tr key={index}>
              <td className='py-2 px-3'>
                {/* <Link to={`/author/${author._id}`}>{author.name}</Link> */}
                {author.name}
              </td>
              <td className='py-2 px-3'>
                <Link className='authorItem' to={`/author/edit/${author._id}`}><button className='bg-blue-200 hover:bg-blue-300 rounded px-1 border-solid border-2 border-blue-400'>Edit</button></Link>
                <DeleteButton authorId={author._id} successCallback = {deleteAuthor}/>
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

