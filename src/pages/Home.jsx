import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../store/slices/products.slice'
import CardProduct from '../components/home/CardProduct'
import './styles/home.css'
import InputSearch from '../components/home/InputSearch'
<<<<<<< HEAD
import FilterCategory from '../components/home/FilterCategory'
import FilterPrice from '../components/home/FilterPrice'
import OrderByPrice from '../components/home/OrderByPrice'
=======
import axios from 'axios'
>>>>>>> 0cd24f6cf202bf1732e67fe4cebcad0f109ad41e

const Home = () => {
  
  const [inputText, setInputText] = useState('')
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })
  
<<<<<<< HEAD
  console.log(filterByPrice)
=======
  // console.log(inputText)
>>>>>>> 0cd24f6cf202bf1732e67fe4cebcad0f109ad41e

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
  
<<<<<<< HEAD

const callBackFilterPrice = product => {
  return product.price >= filterByPrice.from && +product.price <= filterByPrice.to
}
=======
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

>>>>>>> 0cd24f6cf202bf1732e67fe4cebcad0f109ad41e

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