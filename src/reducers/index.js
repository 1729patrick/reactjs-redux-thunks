import { combineReducers } from "redux";
import simpleReducer from './simple';
import { isFetching, fethcedError, fetched } from './app'

export default combineReducers({
    isFetching,
    fethcedError,
    fetched
})
