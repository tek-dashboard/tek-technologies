import React from "react";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    return (
      <>
        <ul>
          {this.props.movieList.map((movie, index) => (
            <>
              <li key={index}>
                <h6>{movie.title}</h6>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.src}`}
                  alt={this.props.title}
                />
              </li>
            </>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieList;
