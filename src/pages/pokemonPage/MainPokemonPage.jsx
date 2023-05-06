import React, { useEffect, useState } from 'react'
import pokemonGroup from '../homepage/pokemongrp.png'
import "./MainPokemonPage.css"
import { InputAdornment, MenuItem, OutlinedInput, Pagination, Select } from '@mui/material'
import ThemeModal from '../modals/ThemeModal/ThemeModal';
import { useNavigate } from 'react-router';
import PokemonCard from './PokemonCard/PokemonCard';
import axios from "axios";
import { useQuery, useQueries} from '@tanstack/react-query'
import Loader from '../../Loader/Loader';
import { normalize, schema } from "normalizr";
import _ from 'lodash';


const MainPokemonPage = ({}) => {
  const navigate = useNavigate()
  const [themeModalOpen, setThemeModalOpen] = useState(false)
  const [limit, setLimit] = useState(8)
  const [pageNum, setPageNum] = useState(1)
  const [offset, setOffset] = useState(0)
  const [pokemonDetails, setPokemonDetails] = useState({})
//   console.log(pokemonDetails)

  // Recalculate offset when pageNum or limit changes
  useEffect(()=> {
    setOffset(limit * (pageNum - 1))
  }, [pageNum, limit])

  // Fetch list of pokemon
  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    console.log(url)
    const response = await axios.get(url)
    return response.data
  }

  console.log(offset)

  // Fetch details of a pokemon
  const fetchPokemonDetails = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const response = await axios.get(url)
    return response.data
  }

  const handlePageChange = (e, v) => {
    setPageNum(v)
  }

  const handlePageSizeOnChange = (e) => {
    setLimit(+e.target.value)
  }

// Fetch pokemon -- refetches when offset (for pagination) or limit changes
const { isLoading, error, isSuccess, refetch, data:pokemonData} = useQuery(
    ["/pokemon", offset, limit], ()=>fetchPokemon(), 
    { staleTime: Infinity, cacheTime: Infinity, refetchOnWindowFocus: false }
)

// Retrive pokemon list data (contains pokemon name, details url only)
let pokemonList;
if (!isLoading && isSuccess){
    pokemonList = pokemonData.results
}

// Fetch details of all pokemon on current page
console.log(offset + 1, limit + offset)
const pokemonQueries = useQueries({
    queries: _.range(offset + 1, limit + offset + 1).map((id) => {
        return {
            queryKey: ['pokemon', id],
            queryFn: () => fetchPokemonDetails(id),
            refetchOnWindowFocus: false,
            staleTime: Infinity, 
            cacheTime: Infinity,
        }
    })
}, )

// Check if all queries are loaded and succeessful
const pokemonQueriesLoaded = pokemonQueries.every(query => !query.isLoading)
console.log("pQueries:", pokemonQueriesLoaded)
const pokemonQueriesIsSuccess = pokemonQueries.every(query => query.isSuccess)

let pokemonDetailsDict = {}
// If successful, retrieve pokemon details data only from each returned query and normalize it to a dictionary
if (pokemonQueriesIsSuccess) {
    const pokemonDetailsList = []
    pokemonQueries.forEach(pokemon => pokemonDetailsList.push(pokemon.data))
    // Normalize pokemon data, setting name property as key
    const dataSchema = new schema.Entity('data', {}, { idAttribute: "name" })
    const dataListSchema = [dataSchema];
    const normalizedData = normalize(pokemonDetailsList, dataListSchema);
    pokemonDetailsDict = normalizedData.entities.data
    console.log(pokemonDetailsDict)
}

console.log(pokemonQueries)
console.log(pokemonData)
console.log(isLoading)

// set pokemonDetailsDict to state
useEffect(() => {
    setPokemonDetails(pokemonDetailsDict)
}, [pokemonQueriesIsSuccess])

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
                {(isLoading || !pokemonQueriesLoaded) && <Loader />}
                {
                    !isLoading && pokemonQueriesIsSuccess && isSuccess && 
                    <div className="pokemon-list grid grid-cols-4 gap-x-4 gap-y-4 px-20 pt-10 h-full overflow-y-scroll">
                    {pokemonList.map(pokemon => {
                        if (pokemonDetailsDict[pokemon.name]) {
                            return (
                                <PokemonCard 
                                key={pokemon.name} 
                                name={pokemon.name} 
                                image={pokemonDetailsDict[pokemon.name].sprites.other.dream_world.front_default}
                                types={pokemonDetailsDict[pokemon.name].types}/>
                            )
                        }
                    })}
                    </div>
                }
            </section>
            <div className="pagination borderr-2 border-green-400 flex items-center justify-between" style={{height: "13vh"}}>
                <Pagination count={10} page={pageNum} color="primary" onChange={handlePageChange} />
                <div>
                <Select
                className="input-field"
                value={limit}
                onChange={handlePageSizeOnChange}
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