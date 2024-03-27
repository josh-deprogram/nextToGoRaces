/**
 * @format
 */

import {render} from '@testing-library/react-native';
import * as React from 'react';
import App from '../src/AppContainer';
import {it} from '@jest/globals';

import {convertRaceResultsToArray, fetchRaceData} from '../src/utils';
import {setRaces} from '../src/state/racesSlice';

// Mocking the action creators and helper functions
jest.mock('../src/state/racesSlice', () => ({
  setRaces: jest.fn(),
}));

it('App renders correctly', () => {
  render(<App />);
});

describe('fetchRaceData utility function', () => {
  beforeEach(() => {
    fetch.resetMocks(); // Reset fetch mocks before each test
  });

  it('successfully fetches and processes 20 race data items', async () => {
    // Simulate a fetch response with 20 race summaries
    const mockRaceSummaries = Array.from({length: 20}, (_, index) => ({
      advertised_start: {seconds: Math.floor(Math.random() * 1000000000)},
      category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
      meeting_id: '9e5cd89f-33a6-4120-8e84-c6931c87a1c7',
      meeting_name: 'Nagoya',
      race_id: '3a21b3a1-dda3-4ebb-adf2-9c5b50b5889b',
      race_name: `Race ${index} - 1500`,
      race_number: index,
    }));

    fetch.mockResponseOnce(
      JSON.stringify({data: {race_summaries: mockRaceSummaries}}),
    );

    const mockDispatch = jest.fn();

    await fetchRaceData({count: 20}).then(response => {
      const data = response.data;
      // console.log(data, 'length', data.length);
      mockDispatch(setRaces(convertRaceResultsToArray(data.race_summaries)));
    });

    // Check if fetch was called once
    expect(fetch).toHaveBeenCalledTimes(1);
    // Check if dispatch was called with setRaces action creator and the expected data
    expect(mockDispatch).toHaveBeenCalledWith(setRaces(mockRaceSummaries));
  });
});
