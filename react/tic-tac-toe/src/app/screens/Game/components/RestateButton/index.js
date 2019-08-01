import React from 'react';
import PropTypes from 'prop-types';

function RestateButton({ desc, move, onClick }) {
  function handleClick() {
    onClick(move);
  }

  return (
    <li key={move}>
      <button
        type="button"
        onClick={handleClick}
      >
        {desc}
      </button>
    </li>
  );
}

RestateButton.propTypes = {
  desc: PropTypes.string.isRequired,
  move: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RestateButton;
