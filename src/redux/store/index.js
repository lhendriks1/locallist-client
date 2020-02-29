import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// TODO:  only use reduxImmutableStateInvariant in dev environment

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant(), promiseMiddleware))
  );
  return store;
}
