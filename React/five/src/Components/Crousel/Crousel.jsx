import { Carousel } from 'bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

const Crousel = () => {
    const caro=useSelector((state)=>state.carouselReducer.caroData) 
    return (
        
            <Carousel>
            {caro.map((item)=>{
                return(
                    <Carousel.Item interval={1500} key={item.id}>
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt="Nature"
                      style={{height:"600px"}}
                    />
                
                    <Carousel.Caption>
                      <h2>{item.title}</h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            })}
            </Carousel>
        
    );
};

export default Crousel;