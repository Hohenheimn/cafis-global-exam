import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import countryReducer from "./country/countrySlice";

// creating redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
