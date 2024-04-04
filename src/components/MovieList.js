import React from "react";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    return (
     
      <>
          {this.props.movieList.map((movie, index) => (
       <h1 key={index}>{movie.title}</h1>
         ))}
      </>
    );
  }
}

export default MovieList;
