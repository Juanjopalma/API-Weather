import React from 'react'
import './ciudad.scss'
import { Button } from 'react-bootstrap'

export const Ciudad = ({handleChange, city, enviar, handleEnterPress}) => {
  return (
    <div className='ciudad'>
      <h2 className='d-none d-lg-block'>El tiempo</h2>
      <input 
        type="text" 
        placeholder='El tiempo en ...'
        value={city}
        onChange={handleChange}
        onKeyPress={handleEnterPress}
      />
      <button className='boton' onClick={enviar}><img src="https://www.eltiempo.es/dist/images/icons/general/svg/search.svg" alt="" /></button>
    </div>
  )
}
