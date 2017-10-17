import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux';
import App from './components/App.jsx';
import configureStore from './redux/store';

const initialState = {}

const store = configureStore(initialState);

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.getElementById('root'));