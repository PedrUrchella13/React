import React from 'react'
import Styles from "./Switch.module.css"

const Switch = (troca, isLight) => {
  return (
    <div className={isLight ? StyleSheet.light : ""}>
      <div id={Styles.Switch}>
        <button></button>
        <span></span>
      </div>
    </div>
  )
}

export default Switch
