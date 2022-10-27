import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import SliderImgs from '../components/productId/SliderImgs'
import './styles/productId.css'

const ProductId = () => {
  
  const [product, setProduct] = useState()
  
  const {id} = useParams()
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
    axios.get(URL)
    .then(res => setProduct(res.data.data.product))
    .catch(err => console.log(err))
  }, [id])
  
 

  return (
    <div className='product__id'>
      <div className="product__slider">
        {
          product && <SliderImgs product={product}/>
        }
      </div>
      <div className="product__info">
        <ProductInfo product={product}/>
      </div>
      <div className="similar__products-component">
        <SimilarProducts product={product}/>
      </div>
    </div>
  )
}

export default ProductId