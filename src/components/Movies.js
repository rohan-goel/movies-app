import React, { Component } from 'react'
import { movies } from './getMovies.js'
import axios from 'axios'

export default class Movies extends Component {
  constructor() {
    super()
    this.state = {
      hover:'',
    }
  }
  render() {
    let movie = movies.results;
    return (
      <div className='movie-area'>
      {
        movie === '' ?
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
            :
            <>
              <div className="movie-heading">
                <h4>Trending</h4></div>
            {
              movie.map((moviesobj) => (
              <div class="card movie-card" onMouseEnter={()=>this.setState({hover:moviesobj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                <img src={`https://image.tmdb.org/t/p/original${moviesobj.backdrop_path}`} class="card-img-top" alt="..." />
                  <h5 class="card-title-movie">{moviesobj.original_title}</h5>
                  <div className='btn-wrapper' style={{display:'flex', width:'100%', justifyContent:'center'}}>
                    {this.state.hover === moviesobj.id && <a  href='#' class="btn btn-primary movie-btn">Add to Favourites</a> }
                  </div>
              </div>
              ))
              }
              </>
        }
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
      
    )
  }
}
