import React from "react";
import { Card, Rate, Button, Collapse } from "antd";
import styled from "styled-components";
const { Meta } = Card;
const { Panel } = Collapse;

const Vendor = () => {
  const cardData = [
    {
      title: "Apple Store",
      rate: 5,
      reviews: 965,
      description: ["Fast Delivery: Ships in 1 day", "Free Cargo"],
      price: { discountedPrice: "$32.50", originalPrice: "$45" },
      buttonLabel: "Go Product",
    },
    {
      title: "Apple Store",
      rate: 5,
      reviews: 965,
      description: ["Fast Delivery: Ships in 1 day", "Free Cargo"],
      price: { discountedPrice: "$32.50", originalPrice: "$45" },
      buttonLabel: "Go Product",
    },
    {
      title: "Apple Store",
      rate: 5,
      reviews: 965,
      description: ["Fast Delivery: Ships in 1 day", "Free Cargo"],
      price: { discountedPrice: "$32.50", originalPrice: "$45" },
      buttonLabel: "Go Product",
    },
    {
      title: "Apple Store",
      rate: 5,
      reviews: 965,
      description: ["Fast Delivery: Ships in 1 day", "Free Cargo"],
      price: { discountedPrice: "$32.50", originalPrice: "$45" },
      buttonLabel: "Go Product",
    },
  ];

  return (
    <VendorContainer>
      <Collapse accordion>
        <Panel header={<StyledPanelHeader>Vendor</StyledPanelHeader>} key="1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {cardData.map((data, index) => (
              <StyledCard key={index} style={{ width: 450 }}>
                <Meta title={data.title} />
                <StyledRate allowHalf defaultValue={data.rate} />
                <p>{data.reviews} Seller Reviews</p>
                <CardDescription>
                  {data.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </CardDescription>
                <CardBottom>
                  <h3>
                    {data.price.discountedPrice}{" "}
                    <span>{data.price.originalPrice}</span>
                  </h3>
                  <Button size="large">{data.buttonLabel}</Button>
                </CardBottom>
              </StyledCard>
            ))}
          </div>
        </Panel>
      </Collapse>
    </VendorContainer>
  );
};

export default Vendor;

const VendorContainer = styled.div`
  padding-top: 20px;
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

const StyledRate = styled(Rate)`
  font-size: 12px;
  padding-left: 10px;
`;

const StyledCard = styled(Card)``;

const CardDescription = styled.div`
  p {
    padding-top: 20px;
  }
`;

const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  Button {
    width: 180px;
    height: 52px;
    background-color: orange;
    font-size: 15px;
    font-weight: 500;
  }

  h3 {
    span {
      text-decoration: line-through;
      font-size: 14px;
      color: #626974;
      font-weight: 400;
    }
  }
`;

const StyledPanelHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
