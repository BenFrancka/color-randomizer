import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color }) => {
  return <div style={{ backgroundColor: color }}></div>;
};

Display.proptypes = {
  color: PropTypes.string.isRequired
};

export default Display;
