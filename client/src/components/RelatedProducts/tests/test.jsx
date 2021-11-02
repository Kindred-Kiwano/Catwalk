import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Carousel from '../Carousel.jsx';
import productList from '../../../../../fakeData/productList.js';

const TestCarousel = () => {
  return (
    render(<Carousel list={productList} />)
  );
};


it('should render carousel component to the screen', () => {
  render(<Carousel list={productList} methods={{}}/>);
  expect(screen.getByName('carousel')).toBeInTheDocument();
});