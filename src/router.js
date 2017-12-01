import React from 'react';
import { Router, Route, browserHistory } from 'dva/router';
import { User, Example } from './routes'
function RouterConfig({ history }) {
  return (
    <Router history={browserHistory}>
      <Route path="/home" component={Example} />
      <Route path="/user" component={User} />
    </Router>
  );
}

export default RouterConfig;
