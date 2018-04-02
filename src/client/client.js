// Start up point fo the client side application
// startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // async/ middle ware lib
import { Provider } from 'react-redux'; // provide store ... react component to contact others
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';
import reducers from './reducers';

// args: import reducer, initial state, applyMiddleWare
const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'));