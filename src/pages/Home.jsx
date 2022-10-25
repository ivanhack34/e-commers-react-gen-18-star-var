import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardProduct from '../components/home/CardProduct'
import './styles/home.css'
import InputSearch from '../components/home/InputSearch'

const Home = () => {
  
  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  
  console.log(inputText)

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
  
  console.log(filterByText)

  return (
    <main className='home'>
      <InputSearch inputText={inputText}  setInputText={setInputText}/>
      <div className="home__container">
        {
          filterByText?.map(product => (
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