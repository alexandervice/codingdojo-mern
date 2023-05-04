import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const OneProduct = (props) => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

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
    </div>
  );
}

export default OneProduct;