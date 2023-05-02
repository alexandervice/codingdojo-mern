import React, { useEffect, useState } from 'react'
import axios from 'axios';
const ProductForm= () => {
  // const [product, setProduct] = useState({
  //   name: "",
  //   price: 0,
  //   description: ""
  // });
  const [ name, setName ] = useState("")
  const [ price, setPrice ] = useState(0)
  const [ description, setDescription ] = useState("")
  // useEffect(()=>{
  //   axios.post("http://localhost:8000/api/products/create")
  //     .then(res=>setProduct(res.data.product))
  //     .catch(err=>console.log(err))
  // }, []);

  const onSubmitHandler = (e) => {
  e.preventDefault();
  //make a post request to create a new product
  axios.post('http://localhost:8000/api/products/create', {
    name,
    price,
    description
  })
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
    .catch(err=>console.log(err))
}

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h5>
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' onChange={(e) => setName(e.target.value)}/>
        </h5>
        <h5>
          <label htmlFor="price">Price:</label>
          <input type="number" name='price' onChange={(e) => setPrice(e.target.value)}/>
        </h5>
        <h5>
          <label htmlFor="description">Description:</label>
          <input type="text" name='description' onChange={(e) => setDescription(e.target.value)}/>
        </h5>
      </form>
    </div>
  )
}
export default ProductForm;

