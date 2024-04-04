import React, { Component } from 'react'

export class MovieList extends Component {
  render() {
    console.log('ppprops', this.props.movieList);
    return (
      <div>MovieList</div>
    )
  }
}

export default MovieList