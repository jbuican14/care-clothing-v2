import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    letter-spacing: 0.3px;
    line-height: 12px;
    padding: 0 15px;
    cursor: unset;
    font-size: 16px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;
