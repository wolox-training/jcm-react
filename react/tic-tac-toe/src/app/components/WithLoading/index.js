import React from 'react';
import Spinner from 'react-spinkit';

function WithLoading(Component) {
  return ({ isLoading, ...props }) =>
    isLoading
      ? <Spinner name="pacman" />
      : <Component {...props} />;
}

export default WithLoading;
