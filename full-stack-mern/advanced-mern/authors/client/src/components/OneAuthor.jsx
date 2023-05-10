import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";

const OneAuthor = (props) => {
  const [author, setAuthor] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  const deleteAuthor = (id) => {
    navigate("/");
    setAuthor(author.filter(author => author.id !== id));
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/find/${id}`)
      .then( res => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch( err=>console.log(err) );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>
      <Link to={"/"}>Home</Link>
      </h2>
      <h3>Author Name: {author.name}</h3>
      <Link className='authorItem' to={`/product/edit/${id}`}><button>Edit</button></Link>
      <DeleteButton authorId={id} successCallback = {()=>deleteAuthor(id)}/>
    </div>
  );
}

export default OneAuthor;