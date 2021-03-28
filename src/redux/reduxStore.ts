import {applyMiddleware, combineReducers, createStore} from "redux";
import { profilePageReducer } from "./profilePageReducer";
import { dialogsPageReducer } from "./dialogsPageReducer";
/*import { sidebarReducer } from "./sidebarReducer";*/
import { usersReducer } from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

export type StoreType = typeof store;

const rootReducer = combineReducers({
    profilePageData: profilePageReducer,
    dialogsPageData: dialogsPageReducer,
    /*sidebar: sidebarReducer,*/
    usersPage: usersReducer,
    auth: authReducer
});

// type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));


//@ts-ignore
window.state = store.getState()