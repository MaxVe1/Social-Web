import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {addPost, state, stateType, updateNewPostText} from './redux/state';
import React from 'react';

export const rerenderEntireTree = (state: stateType): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}  updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

