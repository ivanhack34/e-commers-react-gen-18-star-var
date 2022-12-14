import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'

const Cart = () => {

  const [total, setTotal] = useState(0)

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])
  
  console.log(cart);

  useEffect(() => {
    if(cart) {
      const result = cart.products.reduce((acc, cv) => {
        return acc + Number(cv.price) * cv.productsInCart.quantity
      }, 0)
      setTotal(result)
    }
  }, [cart])

 

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
        setTotal(0)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='cart'>
      {
      cart?.products.length === 0 || cart === null
      ?
      <h1>Hola</h1>
      :
      <section>
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
        <h2>Total: ${total}</h2>
        <button onClick={handlePurchase} style={{fontSize: '30px'}}>Buy Now</button>    
      </section>
      }
      

    </div>
  )
}

export default Cart