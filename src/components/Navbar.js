import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link to='/' style={{textDecoration:'none'}}><h2>Movies App</h2></Link>
            <Link to='/favourites' style={{textDecoration:'none'}}><h3>Favourites</h3></Link>
                
          </div>
        </nav>
      </>
    )
  }
}

