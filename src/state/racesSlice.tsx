import {createSlice} from '@reduxjs/toolkit';
import {IRaceData} from '../types';

export const racesSlice = createSlice({
  name: 'races',
  initialState: {
    value: [],
  },
  reducers: {
    setRaces: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setRaces} = racesSlice.actions;

export const selectRaces = (state: {races: {value: IRaceData[]}}) =>
  state.races.value;

export default racesSlice.reducer;
