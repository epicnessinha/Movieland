import './Moviedetails.css'
import React from 'react'
import start from '../../img/star.png'

const Moviedetails = ({movie}) => {

    return (
        <div className="movieInfoDesign">
            <h3>{movie.name}</h3>
            <div className="moviePoster"><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.name} width="375" height="560"/></div>
            <div className="ReleaseAndRating">
                <div>Release: {movie.release_date}</div>
            
               <div className="rating">{movie.vote_average}<img className='star' src={start} alt='Rating Star'></img></div>
            </div>
           <div className="synopsis">{movie.overview}</div>
           </div>
      
    )
}

export default Moviedetails;
