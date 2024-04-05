/* eslint-disable no-lone-blocks */
import React from "react";
import { Carousel } from "react-bootstrap";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    return (
      <>
        <Carousel>
          {this.props.movieList.map((movie, index) => (
            <>
              <Carousel.Item key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.src}`}
                  alt={this.props.title}
                  height={"75px"}
                  width={"75px"}
                />
              </Carousel.Item>
              <Carousel.Caption>
                <h6>{movie.title}</h6>
              </Carousel.Caption>
            </>
          ))}
        </Carousel>
      </>
    );
  }
}

export default MovieList;


