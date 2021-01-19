import styled from 'styled-components';

export const SignInAndSignUp = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 95%;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const SignInH2 = styled.h2`
  font-family: 'Bebas Neue', cursive;
`;
