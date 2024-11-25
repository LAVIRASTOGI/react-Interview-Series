import { applyMiddleware, combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
