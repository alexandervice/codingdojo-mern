import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductForm= () => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: ""
  });
  // const [ name, setName ] = useState("")
  // const [ price, setPrice ] = useState(0)
  // const [ description, setDescription ] = useState("")
  useEffect(()=>{
    axios.post("http://localhost:8000/api/products/create")
      .then(res=>setProduct(res.data.product))
      .catch(err=>console.log(err))
  }, []);
  return (
    <div>
      <h2>Name: {product.name}</h2>
      <h2>Price: {product.price}</h2>
      <h2>Description: {product.description}</h2>
    </div>
  )
}
export default ProductForm;

