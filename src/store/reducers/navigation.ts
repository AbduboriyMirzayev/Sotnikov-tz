import { createSlice } from "@reduxjs/toolkit";
import paths from "constants/paths";

interface NavigationState {
  activePath: string;
}

export const initialState: NavigationState = {
  activePath: paths.posts,
};

const slice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeActivePath(state, action) {
      state.activePath = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeActivePath } = slice.actions;
