import React from "react";
import styled from "styled-components";
const VirtualRealityHeadset = ({ src }) => {
  return (
    <VrContainer>
      <StyledImage src={src} alt="" />
    </VrContainer>
  );
};

export default VirtualRealityHeadset;

const VrContainer = styled.div`
  height: 350px;
  width: 100%;
  max-width: 1400px;
  padding: 10px;
  margin: 0 auto;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 1400px;
  object-fit: cover;
  height: 100%;
`;
