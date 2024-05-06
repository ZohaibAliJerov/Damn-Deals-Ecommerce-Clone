import React from "react";
import { Card, Rate, Button } from "antd";
import styled from "styled-components";
const { Meta } = Card;

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
  ];
  return (
    <Vendorcontainer>
      <h3>Vendor</h3>
      <StyledCard
        style={{
          width: 400,
          height: "auto",
        }}
      >
        <CardHead style={{ display: "flex", alignItems: "center" }}>
          <Meta title="Apple Store" />
          <StyledRate allowHalf defaultValue={5} />
          <p>965 Seller Reviews</p>
        </CardHead>
        <CardDescription>
          <p>Fast Delivery: Ships in 1 day</p>
          <p>Free Cargo</p>
        </CardDescription>
        <CardBottom>
          <h3>
            $32.50 <span>$45</span>
          </h3>
          <Button size="large">Go Product</Button>
        </CardBottom>
      </StyledCard>
    </Vendorcontainer>
  );
};

export default Vendor;

const Vendorcontainer = styled.div`
  padding-top: 20px;
`;
const StyledRate = styled(Rate)`
  font-size: 12px;
  padding-left: 10px;
`;
const StyledCard = styled(Card)``;

const CardHead = styled.div`
  p {
    padding-left: 10px;
  }
`;
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
