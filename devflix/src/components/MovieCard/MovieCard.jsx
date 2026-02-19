import React from 'react'
import Styles from "./MovieCard.module.css"

const MovieCard = (props) => {
  return (
    <>
    <div className={Styles.movie}>
        <div>
            <p>{props.Year}</p>
        </div>
        <div>
            <img src={props.Poster} alt={props.Title} />
        </div>
        <div>
            <span>{props.Type}</span><h3>{props.Title}</h3>
        </div>
      
    </div>
    </>
  )
}

export default MovieCard
