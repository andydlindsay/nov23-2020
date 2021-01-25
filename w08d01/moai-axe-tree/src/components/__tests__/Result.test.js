// import React from 'react';
import { render, getByTestId, fireEvent, getByText } from '@testing-library/react';
import Result from '../Result';

// bring in library to mock
import axios from 'axios';

// tell jest to mock that library
jest.mock('axios');

// some fake data that looks like our real data
const fakeData = [
  { id: 1, name: 'Alice', points: 15 },
  { id: 2, name: 'Bob', points: 10 },
  { id: 3, name: 'Carol', points: 5 },
];

test('mocking Axios', () => {
  // tell jest to mock return value for axios.get
  axios.get.mockResolvedValueOnce({ data: fakeData });

  // render the component
  const { getByTestId, findByText } = render(<Result status="Waiting" />);

  // grabbed the button
  const fetchHighScoreButton = getByTestId('high-scores');

  // click on the button
  fireEvent.click(fetchHighScoreButton);

  // returns a promise
  return findByText('Bob', {exact: false});

  // expect(findByText('Bob')).resolves.toBeTruthy();
});

test('shows appropriate message when the status is "Waiting"', () => {
  const fakeState = {
    compSelection: null,
    playerSelection: null,
    status: 'Waiting',
    cheating: false
  };
  
  const { container } = render(<Result status={fakeState.status} />);
  expect(getByTestId(container, 'result_footer')).toHaveTextContent('Waiting for your choice!');
});

test('mocking functions', () => {
  const fakeFunction = jest.fn();
  let result = fakeFunction('hello');

  expect(result).toBeUndefined();
  expect(fakeFunction).toHaveBeenCalled();
  expect(fakeFunction).toHaveBeenCalledTimes(1);
  expect(fakeFunction).toHaveBeenCalledWith('hello');

  const fakeFnReturning = jest.fn(() => 42);
  result = fakeFnReturning();
  expect(result).toBe(42);
});
