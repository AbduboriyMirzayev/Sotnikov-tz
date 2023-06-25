import { combineReducers } from "@reduxjs/toolkit";
import navigation from "./navigation";

const reducer = combineReducers({
  navigation: navigation,
});

export default reducer;
