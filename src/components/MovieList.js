/* eslint-disable no-lone-blocks */
import React from "react";
import { Carousel, ExampleCarouselImage } from "react-bootstrap";

export class MovieList extends React.Component {
  render() {
    // console.log('ppprops', this.props.movieList);
    return (
      <>
        <Carousel>
          {this.props.movieList.map((movie, index) => (
            <>
              <ExampleCarouselImage text="First slide" />

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

{
  /** 


<Carousel.Item>
  <ExampleCarouselImage text="Second slide" />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <ExampleCarouselImage text="Third slide" />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
*/
}
