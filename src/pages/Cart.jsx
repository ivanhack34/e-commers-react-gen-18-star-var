import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])
  
  console.log(cart);

  const handlePurchase = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    const data = {
      street: 'Esquina h5',
      colony: 'Distrito Nacional',
      zipCode: 10506,
      city: "Santo Domingo",
      reference: "Some reference"
    }
    axios.post(URL, data, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='cart'>
      <div className="cart__container">
        {
          cart?.products.map(product => (
            <CartProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
      <button onClick={handlePurchase} style={{fontSize: '30px'}}>Buy Now</button>
    </div>
  )
}

export default Cart