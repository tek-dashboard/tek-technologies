import React from "react";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    return (
     
      <>
          {this.props.movieList.map((movie, index) => (
       <h6 key={index}>{movie.title}</h6>
         ))}
      </>
    );
  }
}

export default MovieList;
