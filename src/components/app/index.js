import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Layout from '../layout';
import './style.scss';

import MyMusicPage from '../myMusicPage';
import FeedPage from '../feedPage';

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
        <Route path="/" component={MyMusicPage} />
        <Route path="/feed" component={FeedPage} />
      </Route>
    </Router>
  </Provider>
);

export default App;
