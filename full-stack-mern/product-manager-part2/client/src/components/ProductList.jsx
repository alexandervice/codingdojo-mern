import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
const ProductList = (props) => {
  const {product, setProduct} = props;
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/find/all")
      .then((res)=>{
        console.log(res.data.products);
        setProduct(res.data.products);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      {
        product.map((item, index)=>{
        return(
          <h5 key={index}>
            <Link to={`/product/${item._id}`}>{item.name}</Link>
          </h5>
        )})
      }
    </div>
  )
}
export default ProductList;

