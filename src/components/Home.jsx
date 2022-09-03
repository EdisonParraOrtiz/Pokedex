import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import FooterPoke from './shared/FooterPoke'
import './styles/home.css'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue))
      navigate('/pokedex')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home'>
      <img className='home__img' src="/images/Home/pokedex.png" alt="Pokedex Logo" />
      <h1 className='home__title'>Hi Trainer!</h1>
      <p className='home__description'>To Start give me your trainer name</p>
      <form className='home__form' onSubmit={handleSubmit}>
        <input placeholder='Enter your name' className='home__input' id='name' type="text" />
        <button className='home__btn'>Catch them all</button>
      </form>
      <FooterPoke />
    </div>
  )
}

export default Home