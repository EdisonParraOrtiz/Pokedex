import React from 'react'
import './style/searchInput.css'

const SearchInput = ({setPokeSearch, setOptionType}) => {

  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  return (
    <form className ='form' onSubmit={handleSubmit}>
      <input className ='input' id='searchText' type="text"  />
      <button className ='button' >Search</button>
    </form>
  )
}

export default SearchInput