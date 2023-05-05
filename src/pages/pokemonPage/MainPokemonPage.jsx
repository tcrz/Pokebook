import React, { useState } from 'react'
import pokemonGroup from '../homepage/pokemongrp.png'
import "./MainPokemonPage.css"
import { InputAdornment, MenuItem, OutlinedInput, Pagination, Select } from '@mui/material'
import ThemeModal from '../modals/ThemeModal/ThemeModal';
import { useNavigate } from 'react-router';
import PokemonCard from './PokemonCard/PokemonCard';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MainPokemonPage = ({}) => {
  const navigate = useNavigate()
  const [themeModalOpen, setThemeModalOpen] = useState(false)

  return (
    <div className="pokemon-view bg-noiseBg h-screen borderr-2 border-black relative">
        <ThemeModal openModal={themeModalOpen} setModalOpen={setThemeModalOpen} />
        <nav className="main-nav w-full bg-noiseBg flex items-center justify-between borderr-2 border-red-300 px-7 pt-0" style={{height: "9vh"}}>
            {/* Logo and searchbar */}
            <div className="logo borderr-2 flex items-center gapp-3" style={{height: "100%", width: "68%"}}>
                <div onClick={()=>navigate("/")} className='cursor-pointer w-full flex items-center gap-3'>
                    <div className="mt-4">
                        <img src={pokemonGroup} alt="pokemon group" className="borrder border-orange-400"/>
                    </div>
                    <h3 className="text-xl font-semibold">Poké&nbsp;<span style={{color: "var(--app-color)"}}>book</span></h3>
                </div>
                <div className="borderr" style={{width: "65%"}}>
                    <OutlinedInput className="bg-noiseBg input-field" style={{width: "100%"}} type="text" placeholder="Enter pokemon name"
                    startAdornment={<InputAdornment position="start">O</InputAdornment>} />
                </div>
            </div>
            <div onClick={()=>setThemeModalOpen(prev => !prev)} className="theme rounded-full border cursor-pointer" style={{borderColor: "#868686", padding: ".3em"}}>
                <div className="theme-circle rounded-full" style={{background:"var(--app-color)"}}>
                    &nbsp;
                </div>
            </div>
            
        </nav>
        <main className="borderr-2 border-black" style={{height: "99vh"}}>
            <section className="borderr-2 py-2 border-red-400" style={{height: "85vh", paddingTop: "4vh"}}>
                <div className="pokemon-list grid grid-cols-4 gap-x-4 gap-y-4 px-20 pt-10 h-full overflow-y-scroll">
                    {[...Array(10).keys()].map(i => (
                        <PokemonCard />
                    ))}
                </div>
            </section>
            <div className="pagination borderr-2 border-green-400 flex items-center justify-between" style={{height: "13vh"}}>
                <Pagination count={10} color="primary" disableRipple/>
                <div>
                <Select
                className="input-field"
                value="8"
                >
                    <MenuItem value="8" disableRipple><p>8</p></MenuItem>
                    <MenuItem value="12" disableRipple><p>12</p></MenuItem>
                    <MenuItem value="16" disableRipple><p>16</p></MenuItem>
                    <MenuItem value="24" disableRipple><p>24</p></MenuItem>
                </Select>
                </div>
            </div>

        </main>
        {/* MainPokemonPage */}
    </div>
  )
}

export default MainPokemonPage