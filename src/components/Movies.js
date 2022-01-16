import React, { Component } from 'react'
// import { movies } from './getMovies.js'
import axios from 'axios'

export default class Movies extends Component {
  constructor() {
    super()
    this.state = {
      hover: '',
      parr: [1],
      movies: [],
      currPage: 1,
      favourites:[],
    }
  }

  async componentDidMount() {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=469e73bda015bfbd83fbe7c5a026c2eb&language=en-US&page=${this.state.currPage}`)
    let data = res.data;

    this.setState({
      movies: [...data.results]
    })
  }

  changeMovies = async () => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=469e73bda015bfbd83fbe7c5a026c2eb&language=en-US&page=${this.state.currPage}`)
    let data = res.data;

    this.setState({
      movies: [...data.results]
    })
  }

  handleNext = () => {
    let temp = []
    for (let i = 1; i <= this.state.parr.length + 1; i++){
      temp.push(i);
    }

    this.setState({
      parr: [...temp],
      currPage: this.state.currPage+1
    }, this.changeMovies)
  }

  handlePrev = () => {
    if (this.state.currPage !== 1) {
      this.setState({
        currPage: this.state.currPage - 1,
      },this.changeMovies)
    }
  }
  handleClick = (value) => {
    if (this.state.currPage !== value) {
      this.setState({
        currPage: value,
      },this.changeMovies)
    }
  }

  handleFavourites = (movie) =>{
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]")
    if(this.state.favourites.includes(movie.id)){
        oldData = oldData.filter((m)=>m.id!==movie.id)
    }else{
        oldData.push(movie)
    }
    localStorage.setItem("movies-app",JSON.stringify(oldData));
    this.handleFavState();
}


  handleFavState = () => {
    let oldData = JSON.parse(localStorage.getItem("movies-app" || "[]"))
    let temp = oldData.map((movie) => movie.id)
    this.setState({
      favourites: [...temp]
    })

  }


  render() {
    return (
      <div className='movie-area'>
      {
        this.state.movies === '' ?
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
            :
            <>
              <div className="movie-heading">
                <h4>Trending</h4></div>
            {
              this.state.movies.map((moviesobj) => (
              <div class="card movie-card" onMouseEnter={()=>this.setState({hover:moviesobj.id})} onMouseLeave={()=>this.setState({hover:''})}>
                <img src={`https://image.tmdb.org/t/p/original${moviesobj.backdrop_path}`} class="card-img-top" alt="..." />
                  <h5 class="card-title-movie">{moviesobj.original_title}</h5>
                  <div className='btn-wrapper' style={{display:'flex', width:'100%', justifyContent:'center'}}>
                    {this.state.hover === moviesobj.id && <a class="btn btn-primary movie-btn" onClick={()=>this.handleFavourites(moviesobj)}>{this.state.favourites.includes(moviesobj.id)? "Remove from favourites" :"Add to Favourites"}</a> }
                  </div>
              </div>
              ))
              }
              </>
        }
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#" onClick={this.handlePrev} >Previous</a></li>
            {this.state.parr.map((val) => (
              <li class="page-item"><a class="page-link" href="#" onClick={()=>this.handleClick(val)} >{val}</a></li>
            ))}
            <li class="page-item"><a class="page-link" href="#" onClick={this.handleNext}>Next</a></li>
          </ul>
        </nav>
      </div>
      
    )
  }
}
