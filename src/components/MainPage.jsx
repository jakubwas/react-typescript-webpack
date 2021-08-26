import React from "react";
import webpackImage from "../assets/webpack.png";
import { StyledHeader, StyledImage, StyledMainPage } from "./MainPage.styles";

const MainPage = () => {
  return (
    <StyledMainPage>
      <StyledImage src={webpackImage} />
      <StyledHeader>React App with Webpack Config</StyledHeader>
    </StyledMainPage>
  );
};

export default MainPage;
