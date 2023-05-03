import React from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material'
import pokemonGroup from './pokemongrp.png'
import "./Homepage.css"

const Homepage = () => {
  return (
    <div className="hero-bg bg-homepageBg h-screen flex flex-col items-center justify-aroundd borderr-2 border-black">
        <div className="hero h-full gap-6 borderr-4 border-green-400 flex flex-col items-center">
            <div className="flex flex-col items-center borrder-2 border-red-500 mt-10" style={{textAlign: "center", width: "85%"}}>
                <img src={pokemonGroup} alt="pokemon group" className="borrder border-orange-400"/>
                <h1>Poké&nbsp;<span style={{color: "#E85382"}}>book</span></h1>
                <p style={{width: "70%"}}>Largest Pokémon index with information about every Pokemon you can think of. </p>
            </div>
            <div className="borderr w-full">
                <OutlinedInput className="input-field mb-3" style={{width: "75%"}} type="text" placeholder="Enter pokemon name"
                startAdornment={<InputAdornment position="start"><i className="fa fa-user"></i></InputAdornment>} />
                <p className="underline">View all</p>
            </div>
            
        </div>
    </div>
  )
}

export default Homepage