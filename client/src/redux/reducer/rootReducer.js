import { combineReducers } from "redux";
import { reducerDate } from './reducerDate';
import { reducerEvent } from './reducerEvent';

const rootReducer = combineReducers({
  date: reducerDate,
  event: reducerEvent,
});

export default rootReducer