import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import racesReducer from './racesSlice';

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    races: racesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
