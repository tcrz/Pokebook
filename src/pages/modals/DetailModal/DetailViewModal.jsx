import React from 'react'
import "./DetailViewModal.css"

const DetailViewModal = () => {
  return (
    <div 
    // onClick={()=>openModal ? setModalOpen(false) : false} 
    className="modal-bg bg-noiseBg" 
    style={{display: "flex"}}
    >
      <div className="details-view-modal-box p-2 absolute right-0 text-center">
        {/* pokemon image and background */}
        <div className="pokemon-img-container borderr border-black bg-reed-200 w-full relative" style={{height: "36%"}}>
          <div className="pokemon-img-bg borderr border-black bg-yellow-200" style={{height: "80%"}}></div>
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon-name"/>
        </div>
        {/* POKEMON INFO */}
        <div className="borderr-2 border-red-500 flex flex-col items-center px-5 gap-1" style={{height: "64%"}}>
          {/* Pokemon name and type(s) */}
          <div className="pokemon-name-container borderr border-pink-500 w-full flex flex-col gap-1 items-center text-center">
            <h1 className="text-4xl">Ivysaur</h1>
            <div className="flex items-center borderr border-red-100 gap-2">
              <p className="text-sm rounded-xl bg-gray-200 px-3" style={{background: "#EEEEEE"}}>flying</p>
              <p className="text-sm rounded-xl bg-gray-200 px-3" style={{background: "#EEEEEE"}}>flying</p>
            </div>
          </div>
          {/* Details view */}
          <div className="borderr-2 border-blue-500 h-full w-full flex flex-col items-center" style={{heightt: "60%", marginTop: "2px"}}>
            <div className="border-b-2 border-gray-100 p-0 w-80" style={{height: "20px", background: "linear-gradient(270deg, #FFFFFF -20%, rgba(217, 217, 217, 0.27) 45.3%, #FFFFFF 102.92%)"}}>&nbsp;</div>
            <h1 className="text-xl p-0">About</h1>
            <div className="details-container flex flex-col items-center borderr border-t-2 borderr-b-2 border-gray-100 w-full overflow-y-scroll" style={{height: "80%"}}>
              {/* About view */}
              {/* <div className="about borderr border-blue-400">
                <table className="w-full">
                  <colgroup>
                    <col style={{width:"50%"}} />
                    <col style={{width:"50%"}} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td className="text-right">Height</td>
                      <td className="text-left"><strong>1.1m</strong></td>
                    </tr>
                    <tr>
                      <td className="text-right">Weight</td>
                      <td className="text-left"><strong>24.3kg</strong></td>
                    </tr>
                    <tr>
                      <td className="text-right"><p>Abilities</p></td>
                      <td className="text-left">
                        <ul>
                          <li><strong>overgrow</strong></li>
                          <li><strong>electric shock</strong></li>
                        </ul>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              {/* Stats view */}
              <div className="about borderr border-blue-400" style={{width: "100%"}}>
                <table className="w-full">
                  <colgroup>
                    <col style={{width:"35%"}} />
                    <col style={{width:"50%"}} />
                    <col style={{width:"15%"}} />
                  </colgroup>
                  <tbody>
                    <tr className="text-center">
                      <td className="text-right">HP</td>
                      <td className="text-center"><progress id="file" max="100" value="70"> 70% </progress></td>
                      <td className="text-right">60</td>
                    </tr>
                    <tr>
                      <td className="text-right">Special Attack</td>
                      <td className="text-center"><progress id="file" max="100" value="70"> 50% </progress></td>
                      <td className="text-right">40</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div></div>
              
            </div>
          </div>
          {/* Tabs */}
          <div className="tabs-container borderr border-red-400 w-full flex justify-between items-center" style={{height: "15%"}}>
            <p className="tab text-sm">About</p>
            <p className="tab text-sm">Stats</p>
            <p className="tab text-sm">Similar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailViewModal