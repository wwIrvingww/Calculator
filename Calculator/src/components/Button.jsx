import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick, className }) => {
  return (
    <button name={name} onClick={onClick} className={className}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Button;
