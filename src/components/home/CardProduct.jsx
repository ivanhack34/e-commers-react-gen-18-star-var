import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({product}) => {

  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => {
    e.stopPropagation()
  }

  return (
    <article onClick={handleNavigation} className='product'>
      <header className='product__header'>
        <img src={product.productImgs[0]} alt="" />
      </header>
      <div className="product__body">
        <h3 className="product__title">{product.title}</h3>
        <div className='product__price'>
          <span className='product__price-label'>Price</span>
          <p className='product__price-number'>{product.price}</p>
        </div>
        <button onClick={handleAddCart} className='product__icon-container'>
        <i className="product__icon fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct