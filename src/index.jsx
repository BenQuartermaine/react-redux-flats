// external modules
import React from 'react';
import ReactDOM from 'react-dom';

// This wraps the main application
import { Provider } from 'react-redux';

// Redux is all about the store below, the store is passed to the provider-this is all done by Redux
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


import flatsReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

// State and reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectedFlatReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
