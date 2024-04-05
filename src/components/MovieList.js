/* eslint-disable no-lone-blocks */
import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/index.css";
// import defaultImage from '../assets/placeholderimg.png';


export class MovieList extends React.Component {

  
  render() {
    let movieList = this.props.movieList.map((movie, index) => (
      
      <Carousel.Item key={index}>
        <img
          src={`${movie.src}`}
          alt={this.props.title}
          className="w-50"
        />
    
        <Carousel.Caption className="carousel-caption-none">
          <h5
            style={{
              backgroundColor: "teal",
              borderRadius: "5px",
              width: "max-content",
              margin: "auto",
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
