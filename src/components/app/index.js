import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Layout from '../layout';
import './style.scss';

import MyMusic from '../../pages/myMusic';
import Feed from '../../pages/feed';

const store = createStore(
  combineReducers({
    routing: routerReducer,
  }),
);

const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Layout}>
        <Route path="/" component={MyMusic} />
        <Route path="/feed" component={Feed} />
      </Route>
    </Router>
  </Provider>
);

export default App;
