import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Movies App</a>
            <a class="navbar-brand" href="#">Favourites</a>      
          </div>
        </nav>
      </>
    )
  }
}

