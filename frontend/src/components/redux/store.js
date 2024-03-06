import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./userReducers";
import { postsReducer } from "./postReducers";

const reducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});

let initialState = {};

const middleware = [thunk];
// const [state, dispatch] = useReducer(reducer, initialState);
// This hook function returns an array with 2 values.
//  The first one is the state value, and the second value is the dispatch
// function which is further used to trigger an action with the help of array destructuring.Note:
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
