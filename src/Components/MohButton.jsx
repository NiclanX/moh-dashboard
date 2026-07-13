import React from 'react'
import './MohButton.css'

function MohButton({text, onClick, danger}) {
  return (
    <button onClick={onClick} className={danger ? "mohbutton danger" : "mohbutton"} >{text}</button>
  )
}

export default MohButton