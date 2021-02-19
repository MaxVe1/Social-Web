import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import {store} from "./redux/reduxStore";
import {StoreContext} from "./StoreContext";

const rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree();
store.subscribe(() => {
    //const state = store.getState();
    rerenderEntireTree();
});

