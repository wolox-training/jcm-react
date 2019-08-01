import React from 'react';
import PropTypes from 'prop-types';

function MoveButton({ desc, move, onClick }) {
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

MoveButton.propTypes = {
  desc: PropTypes.string.isRequired,
  move: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MoveButton;
