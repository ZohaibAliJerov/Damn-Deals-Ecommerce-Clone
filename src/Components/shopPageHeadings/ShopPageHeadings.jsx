import React from "react";
import styled from "styled-components";
const ShopHeading = ({ title, description }) => (
  <div>
    <StyledHeadind>{title}</StyledHeadind>
    <StyledPara>{description}</StyledPara>
    <StyledHr />
  </div>
);

export default ShopHeading;

const StyledHr = styled.hr`
  height: 1px;
  margin-top: 10px;
  border: none;
  background-color: #eaeaea;
`;
const StyledHeadind = styled.h2`
  padding-top: 1rem;
  font-family: sans-serif;
  color: #041e42;
  font-weight: 500;
`;

const StyledPara = styled.p`
  padding-top: 10px;
  font-family: sans-serif;
  color: #041e42;
  font-weight: 40;
`;
