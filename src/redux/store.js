import { configureStore } from "@reduxjs/toolkit";

import CardSlicer from "./CardSlicer";

export const store = configureStore({
  reducer: {
    ids: CardSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
