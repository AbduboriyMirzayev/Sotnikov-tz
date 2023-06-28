import { createSlice, isAction } from "@reduxjs/toolkit";
import paths from "constants/paths";

interface IPagination {
  pageSize: number;
  currentPage: number;
}

interface IPaginationState {
  posts: IPagination;
  foto: IPagination;
  tasks: IPagination;
}

export enum EPaginationStateKeys {
  foto = "foto",
  posts = "posts",
  tasks = "tasks",
}

interface IAction {
  payload: {
    key: EPaginationStateKeys;
    value: number;
  };
}

export const initialState: IPaginationState = {
  foto: {
    currentPage: 1,
    pageSize: 10,
  },
  posts: {
    currentPage: 1,
    pageSize: 10,
  },
  tasks: {
    currentPage: 1,
    pageSize: 10,
  },
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePageSize(state, action: IAction) {
      state[action?.payload?.key].pageSize = action.payload.value;
      state[action?.payload?.key].currentPage = 1;
    },
    changePage(state, action: IAction) {
      state[action?.payload?.key].currentPage = action.payload.value;
    },
  },
});

export default slice.reducer;

export const { changePage, changePageSize } = slice.actions;
