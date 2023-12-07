import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CourseList from './CourseList';

export default function CourseSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-arrow-left" onClick={() => setIndex(index - 1)}>Left</div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          
        </Carousel.Item>
        {/* Tambahkan item Carousel lainnya di sini */}
      </Carousel>
      <div className="carousel-arrow-right" onClick={() => setIndex(index + 1)}>Right</div>
    </div>
  );
}
