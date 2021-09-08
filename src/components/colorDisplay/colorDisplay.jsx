import React from 'react';
import PropTypes from 'prop-types';
import './colorDisplay.css';

const Display = ({ color }) => {
  return <div style={{ backgroundColor: color }}></div>;
};

Display.propTypes = {
  color: PropTypes.string.isRequired
};

export default Display;
