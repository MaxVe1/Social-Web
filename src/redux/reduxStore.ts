import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";


const reducers = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,

});



export const store = createStore(reducers);

export type StoreType = typeof store;