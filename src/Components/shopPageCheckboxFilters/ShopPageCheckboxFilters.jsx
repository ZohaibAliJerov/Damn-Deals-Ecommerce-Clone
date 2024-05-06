import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

const ShopPageCheckboxFilters = ({ title, options }) => {
  return (
    <StyledCheckboxContainer>
      <StyledH3>{title}</StyledH3>
      <StyledCheckboxFilters>
        {options.map((option, index) => (
          <StyledCheckbox key={index}>{option}</StyledCheckbox>
        ))}
        <StyledPara>Show More</StyledPara>
      </StyledCheckboxFilters>
      <StyledHr />
    </StyledCheckboxContainer>
  );
};

export default ShopPageCheckboxFilters;

const StyledCheckboxContainer = styled.div`
  width: 15rem;
  padding-top: 20px;
`;
const StyledCheckboxFilters = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const StyledCheckbox = styled(Checkbox)`
  padding-top: 10px;
`;
const StyledPara = styled.p`
  padding-top: 10px;
`;
const StyledH3 = styled.h3``;

const StyledHr = styled.hr`
  width: 15rem;
  margin-top: 20px;
`;
