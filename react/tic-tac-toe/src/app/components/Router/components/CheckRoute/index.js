import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

class CheckRoute extends Component {
  renderRoute = () => {
    const { component: RouteComponent, path, authToken } = this.props;

    if (authToken) {
      return path === '/login'
        ? <Redirect to="/" />
        : <RouteComponent />;
    }

    return path === '/login'
      ? <RouteComponent />
      : <Redirect to="/login" />;
  }

  render () {
    return <Route path={this.props.path} render={this.renderRoute} />;
  }
}

const mapDispatchToProps = (state) => ({
  authToken: state.auth.token
});

CheckRoute.propTypes = {
  authToken: string,
  component: func,
  path: string
};

export default connect(mapDispatchToProps)(CheckRoute);
