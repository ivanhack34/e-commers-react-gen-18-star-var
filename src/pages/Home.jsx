import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardProduct from '../components/home/CardProduct'
import './styles/home.css'
import InputSearch from '../components/home/InputSearch'
import axios from 'axios'

const Home = () => {
  
  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  
  // console.log(inputText)

  const products = useSelector(state => state.products)

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getAllProducts())
  }, [])

  // console.log(products);

  useEffect(() => {
    if(inputText !== '' && products){
      const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
      setFilterByText(products.filter(cb))
    }else{
      setFilterByText(products)
    }
  }, [inputText, products])
  
  // console.log(filterByText)

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

    //Cada quien hace su propia cuenta

    //Crea tu usuario:
    const data = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      role: ''
    }

    axios.post(URL, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }, [])


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