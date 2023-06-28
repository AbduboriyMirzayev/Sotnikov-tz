import { combineReducers } from "@reduxjs/toolkit";
import navigation from "./navigation";
import pagination from "./pagination";

const reducer = combineReducers({
  navigation: navigation,
  pagination: pagination,
});

export default reducer;
