import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../cartSlice/cartSlice';

const store = configureStore({
  reducer:{
   cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;