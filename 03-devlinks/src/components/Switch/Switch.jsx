import React from 'react'
import Styles from "./Switch.module.css"

const Switch = ({troca, isLight}) => {
  return (
    <div className={isLight ? StyleSheet.light : ""}>
      <div onClick={troca} id={Styles.Switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  )
}

export default Switch
