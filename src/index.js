import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '~r'
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.scss';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

