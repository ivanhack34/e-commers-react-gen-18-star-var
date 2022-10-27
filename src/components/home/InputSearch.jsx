import React from 'react'
import './styles/inputSearch.css'

const InputSearch = ({inputText,setInputText}) => {

    const handleChange = e =>{
        setInputText(e.target.value)
    }

  return (
    <div className="inputSearch">
      
      <div className="checkSearch">
      <input type="checkbox" id='checkSearch' />
      <div className="search">
        <label htmlFor="checkSearch">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
      </div>
      <input value={inputText} onChange={handleChange} type="text" placeholder='Search products'/>
      </div>
    </div>
  )
}

export default InputSearch