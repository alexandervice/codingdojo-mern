import React, {useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
const PersonList = (props) => {
  const {product, setProduct} = props;
  
  useEffect(()=>{
    axios.get("http://localhost:8000/api/products/find/all")
      .then((res)=>{
        console.log(res.data);
        setProduct(res.data);
      })
      .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div>
      {
        product.map((product, index)=>{
        return(
          <h5 key={index}>
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
        )})
      }
    </div>
  )
}
export default PersonList;

