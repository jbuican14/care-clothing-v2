import React from 'react';

// import 'pages/homepage/Homepage.styles.scss';
import Directory from 'components/directory/directory.component';
import { HomePageContainer } from 'pages/homepage/homepage.styles';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
