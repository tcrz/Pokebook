import React from 'react'
import pokemonGroup from '../Homepage/pokemongrp.png'
import "./MainPokemonPage.css"
import { InputAdornment, OutlinedInput } from '@mui/material'

const MainPokemonPage = () => {
  return (
    <div className="pokemon-view bg-noiseBg h-screen bordeRr-2 border-black">
        <nav className="w-full bg-noiseBg flex items-center justify-between borderr-2 border-red-300 px-7 pt-0" style={{height: "9vh"}}>
            {/* Logo and searchbar */}
            <div className="logo borderr-2 flex items-center gapp-3" style={{height: "100%", width: "68%"}}>
                <div className='w-full flex items-center gap-3'>
                    <div className="mt-4">
                        <img src={pokemonGroup} alt="pokemon group" className="borrder border-orange-400"/>
                    </div>
                    <h3 className="text-xl font-semibold">Poké&nbsp;<span style={{color: "#E85382"}}>book</span></h3>
                </div>
                <div className="borderr" style={{width: "65%"}}>
                    <OutlinedInput className="bg-noiseBg input-field" style={{width: "100%"}} type="text" placeholder="Enter pokemon name"
                    startAdornment={<InputAdornment position="start">O</InputAdornment>} />
                </div>
            </div>
            <div className="theme rounded-full border" style={{borderColor: "#868686", padding: ".3em"}}>
                <div className="theme-circle rounded-full" style={{background:"#E85382"}}>
                    &nbsp;
                </div>
            </div>
            
        </nav>
        <main>

        </main>
        {/* MainPokemonPage */}
    </div>
  )
}

export default MainPokemonPage