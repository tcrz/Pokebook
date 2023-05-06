import React from 'react'
import logo from './pokemonLogo.png'
import "./Loader.css"

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-around">
        <img className="pokemon-logo" src={logo} alt="spinner"/> 
    </div>
  )
}

export default Loader
