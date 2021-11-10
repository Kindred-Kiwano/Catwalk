// test suite
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ProductTest from './ProductTest.jsx';


describe('Basic content rendering', () => {
  test('should render text to the page', () => {
    render(<ProductTest />);
    var priceMentions = screen.findAllByText(/price/i).then((array) => {
      expect(array.length).not.toBe(0);
    }).catch((err) => {
      throw err;
    });
  });

  test('should render images to the page', () => {
    render(<ProductTest />);
    var images = screen.findAllByRole('image');
    expect(images.length).not.toBe(0);
  });
});

describe('component-specific tests', () => {
  test('the header contains information about reviews', () => {
    render(<ProductTest />);
    var rating = screen.getByText(/read all/i);
    expect(rating).toBeInTheDocument();
  });

  test('there exists an area to share on social media', () => {
    render(<ProductTest />);
    var share = screen.getByText(/Share on social media/i);
    expect(share).toBeInTheDocument();
  });

  test('clicking the arrow buttons renders a new display image', () => {
    render(<ProductTest />);
    var right_button = screen.getByTestId('right-button');
    var beforeImageSource = document.querySelector('.selected').src;
    userEvent.click(right_button);
    var afterImageSource = document.querySelector('.selected').src;
    expect(beforeImageSource).not.toBe(afterImageSource);

  });


  test('clicking a new style renders a new display image', () => {
    render(<ProductTest />);
    var newStyle = screen.getByTestId('style-1');
    var beforeImageSource = document.querySelector('.selected').src;
    userEvent.click(newStyle);
    var afterImageSource = document.querySelector('.selected').src;
    expect(beforeImageSource).not.toBe(afterImageSource);

  });

  // test('clicking add to cart before selecting a size should not add anything to the cart', () => {
  //   render(<ProductTest />);
  //   waitFor(() => {
  //     var addToCart = screen.getByTestId()
  //   })
  // });

  // test('clicking add to cart after selecting a size should add to cart')



});


// methods of use:
  // getByTestId
  //




  // to test:
    // import and render <Gallery/> make sure only 7 images render to the carousel at a time (need to actually fix that)
  // test components that take props - pass in props in the render() method to see if they appear in the expect block

