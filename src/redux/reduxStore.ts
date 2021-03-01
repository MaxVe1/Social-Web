import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {usersReducer} from "./usersReducer";

export type StoreType = typeof store;

const rootReducer = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    usersPage: usersReducer

});



export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);