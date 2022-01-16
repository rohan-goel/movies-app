import React, { Component } from 'react'
import { movies } from './getMovies'

export default class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currGenre:'All Genres'
    }
  }
  render() {
    let movie = movies.results;
    let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
    
    let temp = ['All Genres'];
    movie.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]])
      }
    })

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <ul class="list-group fav-genre">
              {temp.map((genreobj) => (
                this.state.currGenre === genreobj ?
                  <li class="list-group-item" style={{ color: 'white', background: 'blue', fontWeight: 'bold' }}>{genreobj}</li> :
                  <li class="list-group-item" style={{color:'blue'}}>{ genreobj}</li>
                
              ))}
              
            </ul>
          </div>
          <div className="col-9 fav-table">
            <div className="row">
              <input type="text" className='input-group-text col' placeholder='Search'/>
              <input type="number" className='input-group-text col' placeholder='Rows Count'/>
            </div>
            <div className="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Popularity</th>
                  <th scope="col">Rating</th>
                  <th scope="col"></th>
                </tr>
              </thead>
                <tbody>
                  {movie.map((movieObj) => (
                    <tr>
                      <td scope="row">
                      <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} class="card-img-top" alt="movie img" style={{width:'5rem'}} />
                        {movieObj.original_title}</td>
                      <td>{ genreids[movieObj.genre_ids[0]]}</td>
                      <td>{ movieObj.popularity}</td>
                      <td>{movieObj.vote_average}</td>
                      <td><button type="button" class="btn btn-danger">Delete</button>
</td>
                  </tr>
                  ))}
              </tbody>
            </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item"><a class="page-link">1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">3</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}
