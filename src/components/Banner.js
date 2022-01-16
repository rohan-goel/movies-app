import React, { Component } from 'react'
import {movies} from './getMovies.js'
export default class Banner extends Component {
  render() {
    let movie = movies.results[0];
    console.log(movie);
    return (
    <>
      {
        movie == '' ?
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        :
        <div class="card banner-card" >
          <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} class="card-img-top" alt="..."/>
          <div class="card-body banner-body">
            <h3 class="card-title">{movie.original_title}</h3>
            <p class="card-text">{movie.overview}</p>
            {/* <a href="#" class="btn btn-primary">Add to Favourites</a> */}
          </div>
        </div>
      }  
      </>
    )
  }
}
