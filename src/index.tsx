import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {store, stateType} from './redux/state';
import React from 'react';


const rerenderEntireTree = (state: stateType): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

