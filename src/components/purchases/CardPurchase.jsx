import React from 'react'
import './styles/cardpurchases.css'


const CardPurchase = ({purchase}) => {

    console.log(purchase)

  return (
    <article className='purchases-item'>
        <header>{purchase.updatedAt}</header>
        <div>
            {
                purchase.cart.products.map(product => (
                    <section key={product.id}>
                        <h3>{product.title}</h3>
                        <span>{product.productsInCart.quantity}</span>
                        <div className='purchases__price'>${product.price}</div>
                    </section>
                ))
            }
        </div>
    </article>
  )
}

export default CardPurchase