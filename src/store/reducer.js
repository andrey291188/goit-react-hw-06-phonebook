import { combineReducers } from "@reduxjs/toolkit";
import phoneBookReducer from "./phonebook/phoneBookReducer";
import filterReducer from "./phonebook/filterReducer";
;


export const reducer = combineReducers({
    phoneBook: phoneBookReducer,
    filter: filterReducer,
})