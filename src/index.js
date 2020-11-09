import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Redux

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
      applyMiddleware(...middleware)
  )
);

ReactDOM.render(
  <Provider store = {store}>
      <React.StrictMode>
      <App />
      </React.StrictMode>,
  </Provider>,    
    document.getElementById('root')
);

reportWebVitals();
