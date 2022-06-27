import { configureStore } from "@reduxjs/toolkit";

import favoitesReducer from "./favorites";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoitesReducer,
  },
});
