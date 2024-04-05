/* eslint-disable no-lone-blocks */
import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/index.css";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    let movieList = this.props.movieList.map((movie, index) => (
      <Carousel.Item key={index}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.src}`}
          alt={this.props.title}
          className="w-50"
        />
        <Carousel.Caption>
          <h5
            style={{
              backgroundColor: "teal",
              borderRadius: "5px",
              width: "max-content",
              margin: "auto",
              padding: "5px",
              position: "none",
            }}
          >
            {movie.title}
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    return (
      <>
        <Carousel className="carouselNone">{movieList}</Carousel>
      </>
    );
  }
}

export default MovieList;
