import PropTypes from 'prop-types';

export const foodPropTypes = PropTypes.shape({
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
});
