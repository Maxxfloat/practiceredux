import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';

import App from './containers/App';
import reducers from './reducers'


const store = createStore(reducers)

ReactDOM.render (
  <Provider store = {store}>
    <App /> 
  </Provider>  
  ,document.querySelector('#root')
  )