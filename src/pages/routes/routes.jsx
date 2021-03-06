import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { actions, selectors } from 'reducers/user';

import Component1 from 'pages/component1/index.jsx';
import Component2 from 'pages/component2/index.jsx';
import Component3 from 'pages/component3/index.jsx';
import Login from 'pages/login/index.jsx';

import './styles.scss';

const Routes = props => {
  const {
    data: { loggedIn }
  } = props;

  const render = (path = '/login', component) => () => {
    let comp;
    const loginUrl = '/login';
    const {
      location: { pathname }
    } = props;

    if (loggedIn) {
      comp = component || <Redirect to={path} />;
    } else if (pathname === loginUrl) {
      comp = <Login />;
    } else {
      comp = <Redirect to="/login" />;
    }

    return comp;
  };

  return (
    <div className="routes">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/component1" render={render(null, <Component1 />)} />
        <Route exact path="/component2" render={render(null, <Component2 />)} />
        <Route exact path="/component3" render={render(null, <Component3 />)} />
        <Route exact path="/login" render={render('/component1')} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  data: selectors.getState(state)
});

const mapDistpachToProps = dispatch => ({
  userActions: bindActionCreators(actions, dispatch)
});

const RoutesContainer = withRouter(
  connect(
    mapStateToProps,
    mapDistpachToProps
  )(Routes)
);

export default RoutesContainer;
