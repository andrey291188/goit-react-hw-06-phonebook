import { combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from "./phonebook/phoneBookReducer";
;


export const reducer = combineReducers({
    phoneBook: phoneBookReducer,
})