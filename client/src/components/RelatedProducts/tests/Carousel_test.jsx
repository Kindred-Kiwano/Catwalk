import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Carousel from '../Carousel.jsx';

const TestCarousel = () => {
  return (
    <Carousel />
  );
};

export default TestCarousel;