import React, { useState } from 'react'
import Styles from "./MovieCard.module.css"
import MovieDescription from '../MovieDescription/MovieDescription';

const MovieCard = (props) => {
const [isModalOpen, setIsModalOpen] = useState(false);
const toggleModal = () => setIsModalOpen(!isModalOpen)
  return (
    <>
    <div className={Styles.movie} onClick={toggleModal}>
        <div>
            <p>{props.Year}{isModalOpen}</p>
            
        </div>
        <div>
            <img src={props.Poster} alt={props.Title} />
        </div>
        <div>
            <span>{props.Type}</span><h3>{props.Title}</h3>
        </div>

        {isModalOpen &&
        <MovieDescription apiUrl={props.apiUrl} movieId={props.imdbID} click={toggleModal}/>
        }
    </div>
    </>
  )
}

export default MovieCard
