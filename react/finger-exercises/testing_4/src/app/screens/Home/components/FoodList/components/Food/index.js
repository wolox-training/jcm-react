import React from 'react';

import { foodPropTypes } from '../../../../../../../propTypes/food';

import './styles.css';

function Food({ food: { name, description, imageUrl } }) {
  return (
    <div className="food-container">
      <img className="food-image" src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

Food.propTypes = {
  food: foodPropTypes
};

export default Food;
