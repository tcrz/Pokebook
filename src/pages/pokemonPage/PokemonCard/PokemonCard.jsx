import React from 'react'
import "./PokemonCard.css"
import { FaEye } from "react-icons/fa";
import pokemonTypes from '../pokemonTypes';

const PokemonCard = ({name, image, types}) => {
  return (
      <article className="pokemon bgg-red-400 borderr-4 border-orange-500 flex flex-col items-center relative" style={{height: "320px"}}>
        {/* <div className="absolute border border-pink-950" style={{top: "0%", left:"1%"}}> */}
            <img className="absolute top-0" src={image} style={{width: "75%", height: "75%", borrder: "1px solid red", zIndex:1, top: "-5%" }}/>
        {/* </div> */}
        <div className="inner-card-container w-full h-full bgg-red-900 flex flex-col items-center relative" style={{marginTop: "20%"}}>
            <div className="inner-card border border-white w-full h-full p-2 flex flex-col gap-4 bgg-black" style={{marginBottomm: "5%"}}>
                <div className="inner-card-bg borderr border-black w-full flex flex-col items-center" style={{marginToop: "25%", height: "65%"}}>
                    {/* <p>Pokemon</p> */}
                </div>
                <div className="borderr border-blue-900 flex flex-col gap-3 items-center" style={{height: "35%"}}>
                    <h2 className="text-xl font-medium">{name[0].toUpperCase() + name.slice(1)}</h2>
                    <div className="borderr flex justify-around items-center gap-5" style={{minWidth: "55%"}}>
                        {
                            types.map(type => <p className="text-sm rounded-xl bg-gray-200 px-2" style={{background: "#EEEEEE"}}>{pokemonTypes[type.type.name]}&nbsp;{type.type.name}</p>)
                        }
                    </div>
                </div>
            </div>
            <div className="view-btn-container p-2 w-full cursor-pointer absolute bottom-0">
                <div className="view-btn flex justify-between borderr border-yellow-300 w-full">
                    <h2 className="borderr border-yellow-300 w-full">
                        View pokemon
                    </h2>
                    <FaEye className="text-white"/>
                </div>
            </div>
        </div>
      </article>
  )
}

export default PokemonCard