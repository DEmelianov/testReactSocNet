import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe, updateNewPostText, addPost} from './redux/state'
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

reportWebVitals();
