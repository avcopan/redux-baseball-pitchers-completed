import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { pitcherListReducer } from "./pitcher-list-reducer";
import { catcherListReducer } from "./catcher-list-reducer";

const store = createStore(
  combineReducers({
    pitcherList: pitcherListReducer,
    catcherList: catcherListReducer,
  }), 
  applyMiddleware(logger)
)

export default store;