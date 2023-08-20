import { combineReducers } from "redux";
import imagesReducer from "./images";
import authReducer from './auth'
import currentUserReducer from "./currentUser";

export default combineReducers({
    imagesReducer, authReducer,currentUserReducer
})