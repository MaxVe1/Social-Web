import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPost, state, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


const rerenderEntireTree = (): void => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} state={state}  updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


