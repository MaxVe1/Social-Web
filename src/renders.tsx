import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { addPost, state, stateType } from './redux/state';
import React from 'react';

export const rerenderEntireTree = (state: stateType): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
