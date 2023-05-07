import React, { useEffect, useState } from 'react'
import "./DetailViewModal.css"
import pokemonTypes from '../../pokemonPage/pokemonTypes'
import { getDominantColor } from '../../../utils'

const AboutTable = ({height, weight, abilities}) => {
  return (
      <table className="w-full">
        <colgroup>
          <col style={{width:"50%"}} />
          <col style={{width:"50%"}} />
        </colgroup>
        <tbody>
          <tr>
            <td className="text-right">Height</td>
            <td className="text-left"><strong>{height}m</strong></td>
          </tr>
          <tr>
            <td className="text-right">Weight</td>
            <td className="text-left"><strong>{weight}kg</strong></td>
          </tr>
          <tr>
            <td className="text-right"><p>Abilities</p></td>
            <td className="text-left">
              <ul>
                {
                  abilities.map(ability => <li><strong>{ability.ability.name}</strong></li>)
                }
              </ul>
              
            </td>
          </tr>
        </tbody>
      </table>
  )

}

const StatsTable = ({stats}) => {
  return (
    <table className="w-full h-full">
      <colgroup>
        <col style={{width:"35%"}} />
        <col style={{width:"50%"}} />
        <col style={{width:"15%"}} />
      </colgroup>
      <tbody>
      {
        stats.map(stat => (
          <tr className="text-center">
            <td className="text-right">{stat.stat.name}</td>
            <td className="text-center"><progress max="100" value={stat.base_stat}>{stat.base_stat}</progress></td>
            <td className="text-right">{stat.base_stat}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}

const DetailViewModal = ({ openModal, setModalOpen, pokemon}) => {
  console.log(pokemon)
  const tabs = ["About", "Stats", "Similar"]
  const [currentTab, setCurrentTab] = useState("About")
  const [rgb, setRgb] = useState([])
  const lighterRgb = `rgb(${rgb?.map((v) => v + 30)})`
  const darkerRgb = `rgb(${rgb?.map((v) => v - 30)})`
  console.log(lighterRgb)
  console.log(darkerRgb)


  useEffect(() => {
    if (pokemon) {
      getDominantColor(pokemon.sprites.other.dream_world.front_default, setRgb)
    }
  }, [pokemon]);

  const handleModalClose = () => {
    setCurrentTab("About")
    setModalOpen(false)
  }

  const switchTab = (e, tab) => {
    setCurrentTab(tab)
    e.stopPropagation()
  }

  return (
    <div 
    onClick={()=>openModal ? handleModalClose() : false} 
    className="modal-bg bg-noiseBg" 
    style={{display: openModal ? "flex": "none"}}
    >
      { pokemon && <div className="details-view-modal-box p-2 absolute right-1 text-center">
        {/* pokemon image and background */}
        <div className="pokemon-img-container borderr border-black bg-reed-200 w-full relative" style={{height: "36%"}}>
          <div className="pokemon-img-bg borderr border-black bgg-yellow-200" 
          style={{height: "80%", background: `linear-gradient(180deg, ${lighterRgb} 0%, ${darkerRgb} 100%)`}}
          ></div>
          <img src={pokemon.sprites.other.dream_world.front_default} alt="pokemon-name"/>
        </div>
        {/* POKEMON INFO */}
        <div className="borderr-2 border-red-500 flex flex-col items-center px-5 gap-1" style={{height: "64%"}}>
          {/* Pokemon name and type(s) */}
          <div className="pokemon-name-container borderr border-pink-500 w-full flex flex-col gap-1 items-center text-center">
            <h1 className="text-4xl">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
            <div className="flex items-center borderr border-red-100 gap-2">
            {
              pokemon.types.map(type => <p className="text-sm rounded-xl bg-gray-200 px-2" style={{background: "#EEEEEE"}}>{pokemonTypes[type.type.name]}&nbsp;{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</p>)
            }
            </div>
          </div>
          {/* Details view */}
          <div className="borderr-2 border-blue-500 h-full w-full flex flex-col items-center" style={{height: "64%", marginTop: "2px"}}>
            <div className="border-b-2 border-gray-100 p-0 w-80" style={{height: "20px", background: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"}}>&nbsp;</div>
            <h1 className="text-xl p-0">{currentTab}</h1>
            <div className="details-container flex flex-col items-center borderr border-t-2 border-b-2 border-gray-100 w-full overfloww-y-scroll" style={{height: "80%"}}>
              {/* About view */}
              {/* <div className="about borderr border-blue-400">
                
              </div> */}
              {/* Stats view */}
              <div className="details-content borderr-2 border-blue-400 h-full overflow-y-scroll" style={{width: currentTab === "Stats" ? "100%" : "80%"}}>
                {currentTab === "Stats" && <StatsTable stats={pokemon.stats} />}
                {currentTab === "About" && <AboutTable height={pokemon.height} weight={pokemon.weight} abilities={pokemon.abilities} />}
              </div>
              <div></div>
              
            </div>
          </div>
          {/* Tabs */}
          <div className="tabs-container borderr border-red-400 w-full flex justify-between items-center" style={{height: "15%"}}>
            {
              tabs.map(tab => <p onClick={(e)=>switchTab(e, tab)} className={`tab ${currentTab === tab && "active-tab"} cursor-pointer text-sm`} style={{}}>{tab}</p>)
            }
          </div>
        </div>
      </div>}
    </div>
  )
}

export default DetailViewModal