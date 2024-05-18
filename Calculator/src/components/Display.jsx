import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => {
  return <div className="display" data-testid="result">{value}</div>;
};

Display.propTypes = {
  value: PropTypes.string.isRequired
};

export default Display;
