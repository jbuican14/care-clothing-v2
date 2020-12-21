import React from 'react';

import 'components/custom-button/custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
