import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const { REACT_APP_HOST: host } = process.env;

function CarouselPage() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <br />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 500 }}
            src={`${host}/imgcarous/1.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 500 }}
            src={`${host}/imgcarous/2.jpg`}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            style={{ height: 500 }}
            src={`${host}/imgcarous/3.jpg`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselPage;
