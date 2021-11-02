// test suite
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductOverview } from '../ProductOverview.jsx';

describe('Basic content rendering', () => {

  test('should render text to the page', () => {
    render(<ProductOverview />);
    var priceMentions = screen.findAllByText(/price/i).then((array) => {
      expect(array.length).not.toBe(0);
    }).catch((err) => {
      throw err;
    });
  });

  test('should render images to the page', () => {
    render(<ProductOverview />);
    var images = screen.findAllByRole('image');
    expect(images.length).not.toBe(0);
  });

  // to test:
    // import and render <Gallery/> make sure only 7 images render to the carousel at a time (need to actually fix that)
    // test components that take props - pass in props in the render() method to see if they appear in the expect block
});


