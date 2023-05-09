import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const UpdateProduct = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] =useState(false)
  // const [ name, setName ] = useState("");
  // const [ price, setPrice ] = useState(0);
  // const [ description, setDescription ] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/find/${id}`)
      .then(res => {
        // setName(res.data.product.name);
        // setPrice(res.data.product.price);
        // setDescription(res.data.product.description);
        setProduct(res.data.product)
        setLoaded(true)
      })
        .catch(err => console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateProduct = productData => {
    axios.patch(`http://localhost:8000/api/products/update/${id}`, productData)
      .then(res => {
        console.log(res);
        navigate("/"); // this will take us back to the Main.js
      })
      .catch(err => {
        console.log(err)
        const errorResponse = err.response.data.errors;
        const errorArray = [];
        for (const key of Object.keys(errorResponse)) {
          errorArray.push(errorResponse[key].message)
        }
        setErrors(errorArray)
      })
  }

  const deleteProduct = (id) => {
    navigate("/");
    setProduct(product.filter(product => product.id !== id));
  }

  return (
    <div>
      <h3>Update a Product</h3>
      {loaded? 
      <div>
        <ProductForm onSubmission={updateProduct} placeholderName={product.name} placeholderPrice={product.price} placeholderDescription={product.description} errors={errors}/>
        <DeleteButton productId={id} successCallback = {()=>deleteProduct(id)}/>
      </div>
      :null}
    </div>
  )
}
export default UpdateProduct;

