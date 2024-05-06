import React from "react";
import styled from "styled-components";
import LogoSvg from "../../../assets/svgs/blogPostSvg/logoHorizontal 1.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={LogoSvg} alt="" />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LogoImage = styled.img`
  width: 20rem;
  height: auto;
`;
