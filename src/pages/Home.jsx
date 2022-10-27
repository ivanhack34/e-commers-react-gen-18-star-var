import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardProduct from '../components/home/CardProduct'
import './styles/home.css'
import InputSearch from '../components/home/InputSearch'
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'

const Home = () => {
  
  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })
  
  console.log(filterByPrice)

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAllProducts())
  }, [])

  console.log(products);

  useEffect(() => {
    if(inputText !== '' && products){
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    }else{
      setFilterByText(products)
    }
  }, [inputText])
  

const callBackFilterPrice = product => {
  return product.price >= filterByPrice.from && +product.price <= filterByPrice.to
}

  return (
    <main className='home'>
      <InputSearch inputText={inputText}  setInputText={setInputText}/>
      <FilterPrice setFilterByPrice={setFilterByPrice}/>
      <FilterCategory />
      <OrderByPrice />
      <div className="home__container">
        {
          filterByText?.filter(callBackFilterPrice).map(product => (
            <CardProduct 
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Home