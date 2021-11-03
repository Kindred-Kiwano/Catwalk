import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import Carousel from '../Carousel.jsx';
import productList from '../../../../../fakeData/productList.js';
import UserContext from '../UserContext.jsx';

var carouselType = {
  outfit: {
    button: 'ⓧ'
  },
  related: {
    button: '★'
  }
};

const TestCarousels = () => {
  return (
    <>
      <Carousel type={carouselType.related} list={productList} />
      <Carousel type={carouselType.outfit} list={productList} />
    </>
  );
};

describe('Component rendering', () => {

  it('should render carousel component to the screen', () => {
    render(<TestCarousels />);
    var buttons = screen.findAllByText('ⓧ').then((array) => {
      expect(array.length).not.toBe(0);
    });
  });

});