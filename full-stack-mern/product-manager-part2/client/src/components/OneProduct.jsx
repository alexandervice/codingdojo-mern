import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams, Link} from "react-router-dom";

const OneProduct = (props) => {
  const [product, setProduct] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  const removeFromDom = id => {
    setProduct(product.filter(product => product.id !== id))
  }

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
      .then(res => {
        removeFromDom(id)
        navigate("/");
      })
      .catch(err=>console.log(err))
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/find/${id}`)
      .then( res => {
        console.log(res.data.product);
        setProduct(res.data.product);
      })
      .catch( err=>console.log(err) );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>Product Name: {product.name}</h3>
      <h5>Price: {product.price}</h5>
      <h5>Description: {product.description}</h5>
      <Link to={`/product/edit/${id}`}>Edit</Link>
      <button onClick={(e) => {deleteProduct(id)}} >Delete</button>
    </div>
  );
}

export default OneProduct;