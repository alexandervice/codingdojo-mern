import React, { useState } from 'react'
import axios from 'axios';
const ProductForm= () => {
  // const [product, setProduct] = useState({
  //   name: "",
  //   price: 0,
  //   description: ""
  // });
  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ description, setDescription ] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(false);
  // useEffect(()=>{
  //   axios.post("http://localhost:8000/api/products/create")
  //     .then(res=>setProduct(res.data.product))
  //     .catch(err=>console.log(err))
  // }, []);

  const onSubmitHandler = (e) => {
  e.preventDefault();
  setSubmissionStatus(true);
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
      {submissionStatus ?
      <h3>Thank you for submitting the form</h3> :
      <div className='productForm'>
        <h3>Create a New Product</h3>
        <form onSubmit={onSubmitHandler}>
          <h5>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' onChange={(e) => setName(e.target.value)}/>
          </h5>
          <h5>
            <label htmlFor="price">Price: </label>
            <input type="number" name='price' onChange={(e) => setPrice(e.target.value)}/>
          </h5>
          <h5>
            <label htmlFor="description">Description: </label>
            <input type="text" name='description' onChange={(e) => setDescription(e.target.value)}/>
          </h5>
          <input type="submit"/>
        </form>
      </div>
      }
    </div>
  )
}
export default ProductForm;

