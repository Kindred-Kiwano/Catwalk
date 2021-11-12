// test suite example by Elliot
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReviewsTest from './ReviewsTest.jsx';

describe('Basic content rendering', () => {
  test('should render text to the page', () => {
    render(<ReviewsTest />);
    var mentionedSort = screen.findAllByText(/sort/i).then((array) => {
      expect(array.length).not.toBe(0);
    }).catch((err) => {
      throw err;
    });
  });
  test('should NOT render images to the page', () => {
    render(<ReviewsTest />);
    var images = screen.findAllByRole('image');
    expect(images.length).not.toBe(5);
  });
});