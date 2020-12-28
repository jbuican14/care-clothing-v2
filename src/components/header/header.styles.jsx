import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const optionContainerStyles = css`
  padding: 10px 15px;
  font-family: 'Kalam', cursive;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  color: rgb(14, 46, 75);
  color: rgb(14, 46, 75);
  transition: width 0.3s cubic-bezier(0.8, 0, 0.99, 0.79);

  &::after {
    content: '';
    width: 0px;
    height: 1px;
    display: block;
    opacity: 0;
    background-color: rgb(14, 46, 75);
    transition: all 0.5s 0.3s;
  }
  &:hover {
    font-weight: 600;
    &::after {
      width: 100%;
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${optionContainerStyles}
`;
