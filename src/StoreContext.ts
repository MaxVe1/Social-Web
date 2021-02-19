import React from "react";
import {store, StoreType} from "./redux/reduxStore";

export const StoreContext = React.createContext<StoreType>(store);
