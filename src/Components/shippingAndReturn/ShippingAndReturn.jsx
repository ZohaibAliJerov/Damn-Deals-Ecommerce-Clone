import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ShippingAndReturns = () => {
  const shippingAndReturnsText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor aliquam tortor at suscipit. 
    Etiam accumsan, est id vehicula cursus, eros ligula suscipit massa, sed auctor felis mi eu massa. 
    Sed vulputate nisi nibh, vel maximus velit auctor nec. Integer consectetur elementum turpis, nec fermentum ipsum tempor quis. 
    Praesent a quam congue, egestas erat sit amet, finibus justo. Quisque viverra neque vehicula eros gravida ultricies. 
    Ut lacinia enim nec consequat tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    Vivamus ultricies ornare feugiat. Donec vitae rhoncus sapien, ac aliquet nunc.
  `;

  return (
    <ShippingAndReturnContainer>
      <Collapse accordion>
        <Panel
          header={<StyledPanelHeader>Shipping and Return</StyledPanelHeader>}
          key="1"
        >
          <ShippingAndReturnsText>
            {shippingAndReturnsText}
          </ShippingAndReturnsText>
        </Panel>
      </Collapse>
    </ShippingAndReturnContainer>
  );
};

export default ShippingAndReturns;
const ShippingAndReturnContainer = styled.div`
  padding-top: 20px;
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const ShippingAndReturnsText = styled.div`
  padding: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-top: 20px;
`;
const StyledPanelHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
