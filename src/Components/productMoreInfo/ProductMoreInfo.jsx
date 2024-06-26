import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ProductMoreInfo = () => {
  const info = [
    "English-language MacBook Pro",
    "10-core Apple M1 Pro chip for a giant leap in CPU, GPU, and machine learning performance",
    "16GB of RAM so everything you do is fast and fluid",
    "16-core Neural Engine for advanced machine learning",
    "16-core GPU",
    "Ultrafast 1TB solid state drive (SSD) is blazing fast, so you can take all your photos and videos with you no matter.",
  ];
  const specs = [
    "16.2-inch liquid retina XDR display delivers a responsive and natural viewing experience",
    "3456 x 2234 native resolution with support for millions of colours",
    "ProMotion technology for adaptive refresh rates up to 120Hz",
    "Studio-quality three-mic array with high signal-to-noise ratio and directional beamforming",
    "High fidelity six speaker sound system with forece-cancelling woofers",
  ];

  return (
    <ProductInfoCont>
      <Collapse accordion>
        <Panel
          header={<StyledPanelHeader>More Information</StyledPanelHeader>}
          key="1"
        >
          <ProductMoreInfoContainer>
            <HeadingContainer>
              <StyledHeadings>Powerful Performance</StyledHeadings>
            </HeadingContainer>
            <div>
              <StyledUl>
                {info.map((item, index) => (
                  <StyledLi key={index}>{item}</StyledLi>
                ))}
              </StyledUl>
            </div>
            <HeadingContainer>
              <StyledHeadings>Specifications</StyledHeadings>
            </HeadingContainer>
            <div>
              <StyledUl>
                {specs.map((item, index) => (
                  <StyledLi key={index}>{item}</StyledLi>
                ))}
              </StyledUl>
            </div>
          </ProductMoreInfoContainer>
        </Panel>
      </Collapse>
    </ProductInfoCont>
  );
};

export default ProductMoreInfo;
const ProductInfoCont = styled.div`
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ProductMoreInfoContainer = styled.div`
  padding-top: 20px;
`;

const StyledUl = styled.ul`
  padding-left: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StyledLi = styled.li`
  padding-top: 20px;
`;
const HeadingContainer = styled.div`
  padding-top: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StyledHeadings = styled.h4`
  padding-top: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
const StyledPanelHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
