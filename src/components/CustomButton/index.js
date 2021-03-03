import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({ handleToggler }) => {
  console.log('rendu de Messages');

  return (
    <button
      onClick={handleToggler}
      className="customButton"
    >+</button>
  );
};

export default CustomButton;
