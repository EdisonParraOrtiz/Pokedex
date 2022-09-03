import React from 'react'
import './styles/headerPoke.css'

const HeaderPoke = () => {
  return (
    <header className='red-rectangle-header'>
      <img className='header-img' src="/images/Home/pokedex.png" alt="" />
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default HeaderPoke