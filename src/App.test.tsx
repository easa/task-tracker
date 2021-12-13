/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';
// FIXME: write a valid test
const mockDispatch = jest.fn();
const mockedDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('App', () => {
  beforeEach(() => {
    const mockState = { task: { tasks: [], currentId: '' } };
    useSelector.mockImplementation((callback: any) => callback(mockState));
  });
  afterEach(() => {
    useSelector.mockClear();
  });
  test('renders App component', () => {
    // useSelector.mockImplementation((selectorFn: any) => selectorFn());
    // useDispatch.mockReturnValue(mockedDispatch);
    // render(<App />);
    // expect(mockDispatch).toHaveBeenCalledWith(/* arguments your expect */);

    // render(<App />);

    screen.debug();
  });
});
