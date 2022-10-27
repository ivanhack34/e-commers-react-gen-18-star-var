import React from 'react'


const InputSearch = ({inputText,setInputText}) => {

    const handleChange = e =>{
        setInputText(e.target.value)
    }

  return (
    <input className='input_container' value={inputText} onChange={handleChange} type="text" placeholder='Enter a product'/>
  )
}

export default InputSearch