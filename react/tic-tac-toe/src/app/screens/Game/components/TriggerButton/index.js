import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TriggerButton extends Component {
  handleClick = () => {
    const { onClick, onClickArgs } = this.props;
    onClick(onClickArgs);
  }

  render () {
    const { children, btnClass } = this.props;
    return (
      <button
        type="button"
        className={btnClass}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

TriggerButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onClickArgs: PropTypes.any.isRequired,
  btnClass: PropTypes.string,
  onClick: PropTypes.func
};

export default TriggerButton;
