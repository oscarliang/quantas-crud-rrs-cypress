import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./ducks";
import { removeAllCookies } from "./utils/utils"

removeAllCookies();
// pass window.__initialData__ to preloadedState
const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(thunk));

export default configureStore;