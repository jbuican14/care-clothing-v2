import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: cadetblue;
  color: white;
  border: none;

  &:hover {
    color: #150c0c;
    border: 1px solid #150c0c;
  }
`;
const invertedBtnStyles = css`
  background-color: cadetblue;
  color: #150c0c;
  border: 1px solid #150c0c;

  &:hover {
    color: #fff;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    color: #000;
    outline: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.signInWithGoogle) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedBtnStyles : buttonStyles;
};

export const CustomBtnContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 16px;
  padding: 0 35px;
  font-size: 15px;
  background-color: cadetblue;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  border: none;
  cursor: pointer;
  font-family: inherit;
  margin: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`;
