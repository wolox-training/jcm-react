import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  renderComponent = (props) => {
    const { component: ComponentToRender, authToken } = this.props;
    return authToken
      ? (<ComponentToRender {...props} />)
      : (<Redirect to={{ pathname: '/login', from: props.location }} />);
  }

  render () {
    const { component, authToken, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <Route {...rest} render={this.renderComponent} />
    );
  }
}

const mapDispatchToProps = (state) => ({
  authToken: state.auth.token
});

export default connect(mapDispatchToProps)(PrivateRoute);
