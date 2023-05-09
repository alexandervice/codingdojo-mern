import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
  const [product, setProduct] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/find/all")
      .then((res)=>{
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteProduct = (id) => {
    window.location.reload(false);
    setProduct(product.filter(product => product.id !== id));
  }

  const createProduct = productData => {
    axios.post('http://localhost:8000/api/products/create', productData)
      .then(res=>{
        // console.log(res);
        // console.log(res.data);
        window.location.reload(false)
        setProduct([...product, res.data])
      })
      .catch(err=> {
        console.log(err)
        setErrors(err.response.data.errors)
      })
  }
  
  return (
    <div>
      <ProductForm onSubmission={createProduct} placeholderName = "" placeholderPrice = {0} placeholderDescription = "" errors={errors}/>
        <hr/>
      <ProductList product={product} deleteProduct={deleteProduct}/>
    </div>
  )
}
export default Main;
