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
        <main className="borderr-2 border-black" style={{height: "91vh"}}>
            <section className="borderr border-red-400" style={{height: "78vh"}}>
                <div className="pokemon-list grid grid-cols-4 gap-x-4 gap-y-4 px-20 py-10 h-full overflow-y-scroll">
                    {[...Array(10).keys()].map(i => (
                        <article className="pokemon bgg-red-400 borderr-4 border-orange-500 flex flex-col items-center relative" style={{height: "280pxx"}}>
                            {/* <div className="absolute border border-pink-950" style={{top: "0%", left:"1%"}}> */}
                                <img className="absolute top-0" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"} style={{width: "75%", height: "75%", borrder: "1px solid red", top: "-5%"}}/>
                            {/* </div> */}
                            <div className="inner-card border border-white w-full h-full p-2 flex flex-col gap-6" style={{marginTop: "18%"}}>
                                <div className="inner-card-bg borderr border-black w-full flex flex-col items-center" style={{marginToop: "25%", height: "60%"}}>
                                    {/* <p>Pokemon</p> */}

                                    
                                    
                                </div>
                                <div className="borderr border-blue-900 flex flex-col items-center">
                                    <h2 className="text-xl font-medium">Charizard</h2>
                                    <div>
                                        <p>skills</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </section>
            <div className="pagination borderr border-green-400" style={{height: "12vh"}}>

            </div>

        </main>
        {/* MainPokemonPage */}
    </div>
  )
}

export default MainPokemonPage