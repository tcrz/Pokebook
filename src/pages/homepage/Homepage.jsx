import React from 'react'
import { InputAdornment, OutlinedInput } from '@mui/material'
import pokemonGroup from './pokemongrp.png'
import "./Homepage.css"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className="hero-bg bg-noiseBg h-screen flex flex-col items-center justify-aroundd borderr-2 border-black">
        <div className="hero h-full gap-6 borderr-4 border-green-400 flex flex-col items-center">
            <div className="flex flex-col items-center borderr-2 border-red-500 mt-10" style={{textAlign: "center", width: "85%"}}>
                <img src={pokemonGroup} alt="pokemon group" className="borrder border-orange-400"/>
                <h1>Poké&nbsp;<span style={{color: "var(--app-color)"}}>book</span></h1>
                <p style={{width: "70%"}}>Largest Pokémon index with information about every Pokemon you can think of.</p>
            </div>
            <div className="borderr text-center w-full">
              <OutlinedInput onClick={()=>navigate("/all")} className="cursor-pointer input-field hero-input-field mb-3" style={{width: "75%"}} type="text" placeholder="Enter pokemon name"
              endAdornment={<InputAdornment position="end"><p className='text-sm text-white rounded-full' style={{padding: ".7em .8em", background:"var(--app-color)", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.155)"}}><AiOutlineSearch /></p></InputAdornment>} />
              <p><Link to="/all" className="underline">View all</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Homepage