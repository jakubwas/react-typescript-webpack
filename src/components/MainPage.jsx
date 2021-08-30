import React from 'react';
import webpackImage from '../assets/webpack.png';
import { StyledHeader, StyledImage, StyledMainPage, StyledWebpackConfig } from './MainPage.styles';
import PathAliasesExample from './PathAliasesExample/PathAliasesExample';

const MainPage = () => (
  <StyledMainPage>
    <StyledImage src={webpackImage} />
    <StyledHeader>React App with Webpack Config</StyledHeader>
    <StyledWebpackConfig>
      <span>Env</span>
        <StyledHeader>{process.env.API_URL}</StyledHeader>
    </StyledWebpackConfig>
    <StyledWebpackConfig>
    <span>Env</span>
    <PathAliasesExample />

    </StyledWebpackConfig>
  </StyledMainPage>
);

export default MainPage;
