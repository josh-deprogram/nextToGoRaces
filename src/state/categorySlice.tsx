import {createSlice} from '@reduxjs/toolkit';
import {RACE_CATEGORIES} from '../config';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    value: [
      RACE_CATEGORIES.greyhound,
      RACE_CATEGORIES.thoroughbred,
      RACE_CATEGORIES.harness,
    ],
  },
  reducers: {
    setCategory: (state, action) => {
      const newState: string[] = [...state.value, action.payload];
      //@ts-ignore
      state.value = newState;
    },
    removeCategory: (state, action) => {
      const newState: string[] = state.value.filter(s => s !== action.payload);
      //@ts-ignore
      state.value = newState;
    },
  },
});

export const {setCategory, removeCategory} = categorySlice.actions;

export const selectCategories = (state: {categories: {value: string[]}}) =>
  state.categories.value;

export default categorySlice.reducer;
