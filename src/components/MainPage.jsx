import React from 'react';
import webpackImage from '../assets/webpack.png';
import {
  StyledHeader,
  StyledImage,
  StyledMainPage,
  StyledWebpackConfig,
} from './MainPage.styles';
import PathAliasesExample from './PathAliasesExample/PathAliasesExample';

const MainPage = () => (
  <StyledMainPage>
    <StyledImage src={webpackImage} />
    <div>
      <StyledHeader>React App with Webpack Config</StyledHeader>
      <StyledWebpackConfig>
        <span>Environment: </span>
        <StyledHeader>{process.env.API_URL}</StyledHeader>
      </StyledWebpackConfig>
      <StyledWebpackConfig>
        <span>Path ALias:</span>
        <PathAliasesExample />
      </StyledWebpackConfig>
    </div>
  </StyledMainPage>
);

export default MainPage;
