import React from 'react';

import { CustomBtnContainer } from 'components/custom-button/custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomBtnContainer {...props}>{children}</CustomBtnContainer>
);

export default CustomButton;
