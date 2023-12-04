import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  image: null,
  fScreen: null,
  rScreen: null,
};

const makeSocket = createSlice({
  name: "ids",
  initialState,
  reducers: {
    keepId: (state, action) => {
      state.id = action.payload;
    },
    keepImg: (state, action) => {
      state.image = action.payload;
    },
    setScreen: (state, action) => {
      state.fScreen = action.payload;
    },
    setRScreen: (state, action) => {
      state.rScreen = action.payload;
    },
  },
});

export const { keepId, keepImg, setScreen, setRScreen } = makeSocket.actions;
export default makeSocket.reducer;
