import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SimilarProducts = ({productCategory}) => {

    const [categories, setCategories] = useState()
    const [idCategory, setIdCategory] = useState()
    
  
    useEffect(() => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
      axios.get(URL)
        .then(res => setCategories(res.data.data.categories))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if(categories && productCategory){
            const cb = category => category.name === productCategory
            setIdCategory(categories.filter(cb)[0].id)
        }
    }, [categories, productCategory])

    console.log(idCategory);

  return (
    <div>SimilarProducts</div>
  )
}

export default SimilarProducts