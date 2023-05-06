import React, { useContext } from 'react'
import "./ThemeModal.css"
import { ThemeContext } from '../../../themeContext/themeContext'

const ThemeModal = ({ openModal, setModalOpen}) => {
  const {theme, setTheme} = useContext(ThemeContext)
  const colors = [ "#E85382", "#39BADF", "#E1A725"]

  const handleSetTheme = (color) => {
    setTheme(color)
    setModalOpen(false)
  }

  return (
    <div onClick={()=>openModal ? setModalOpen(false) : false} className="modal-bg bg-noiseBg" style={{display: openModal ? "flex": "none"}}>
      <div onClick={(e)=>e.stopPropagation()} className="theme-modal-box bg-noiseBg">
        <div className="theme-modal-heading border-b border-black flex items-center justify-around" style={{height: "20%"}}>
          <h3 className="text-xl font-semibold">Choose Theme</h3>
        </div>
        <div className="theme-container bg-noiseBg h-full w-full borderr border-red-400 flex items-center justify-around" style={{height: "80%"}}>
          {
            colors.map(color => (<div key={color} onClick={()=>handleSetTheme(color)} className={`theme ${color === theme ? "border rounded-full border-black" : ""}   cursor-pointer`} style={{ padding: ".3em"}}>
              <div className="theme-circle rounded-full" style={{background: color}}>
                  &nbsp;
              </div>
            </div>))
          }
        </div>
      </div>
    </div>
  )
}

export default ThemeModal