import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Carousels = () => {
        const caro=useSelector((state)=>state.CarouselReducer.carouselData)
  return (
      <Carousel>
        {caro.map((elem) => {
          return (
            <Carousel.Item interval={1500} key={elem.id}>
              <img
                className="d-block w-100"
                src={elem.carouselImg}
                alt="First slide"
                style={{ height: "600px" }}
              />
              <Carousel.Caption>
                <h3>{elem.carouselTitle}</h3>
                <h4>{elem.carouselDescription}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        </Carousel>
  );
};

export default Carousels;