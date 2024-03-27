import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import ListContainer from '../src/components/list-container';
import {RACE_CATEGORIES} from '../src/config';
import {configureStore} from '@reduxjs/toolkit';

import categoryReducer from '../src/state/categorySlice';
import racesReducer, {setRaces} from '../src/state/racesSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    races: racesReducer,
  },
});

describe('ListContainer - Maximum Render Test', () => {
  const mockRacesData: {
    meeting_id: string;
    race_number: number;
    meeting_name: string;
    race_name: string;
    category_id: string;
    advertised_start: {seconds: number};
  }[] = []; // An array to hold mock race data
  const fetchRaceDataMock = jest.fn();

  beforeEach(() => {
    // Populate mockRacesData with more than 5 races
    for (let i = 0; i < 10; i++) {
      mockRacesData.push({
        meeting_id: `meeting_${i}`,
        race_number: i + 1,
        meeting_name: `Meeting Name ${i}`,
        race_name: `Race Name ${i}`,
        category_id: RACE_CATEGORIES.greyhound,
        advertised_start: {
          seconds: Date.now() / 1000 + i * 60, // Future start times
        },
      });
    }
    store.dispatch(setRaces(mockRacesData));
  });

  it('renders a maximum of 5 items', () => {
    const {getAllByText} = render(
      <Provider store={store}>
        <ListContainer numberOfRaces={5} fetchRaceData={fetchRaceDataMock} />
      </Provider>,
    );

    // Using a common text pattern found in all items you expect to be rendered.
    const renderedItems = getAllByText(/Race Name/);

    // Verify that only 5 items are rendered
    expect(renderedItems.length).toBe(5);
  });
});
