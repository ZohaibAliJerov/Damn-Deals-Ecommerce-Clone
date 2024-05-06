import React, { useState } from "react";
import { Row, Col, Rate, Card as AntdCard } from "antd";
import { Button } from "antd";
import styled from "styled-components";
import { shopCardsData } from "../data/Data";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const { Meta } = AntdCard;

const Card = ({ title, description, rating, reviews, image }) => {
  const [value, setValue] = useState(5);

  return (
    <StyledCard hoverable cover={<img alt="example" src={image} />}>
      <Meta title={title} />
      <Description style={{ paddingTop: "10px" }}>{description}</Description>
      <Rating style={{ display: "flex", alignItems: "center" }}>
        <Rate
          tooltips={desc}
          onChange={setValue}
          value={value}
          style={{ fontSize: "12px", paddingRight: "20px" }}
        />
        {reviews}
        reviews
      </Rating>
      <Price>
        $899.99 <StyledSpan> $54 </StyledSpan>
      </Price>
    </StyledCard>
  );
};

const ShopProductCards = (props) => {
  return (
    <GridContainer>
      <Row gutter={[16, 16]}>
        {shopCardsData.map((card) => (
          <Col
            style={{
              display: "flex",
              margin: "0 auto",
            }}
            key={card.id}
            xs={{
              flex: "100%",
            }}
            sm={{
              flex: props.view === "grid" ? "50%" : "100%",
            }}
            md={{
              flex: props.view === "grid" ? "30%" : "100%",
            }}
            lg={{
              flex: props.view === "grid" ? "20%" : "100%",
            }}
          >
            {props.view === "grid" ? (
              <Card {...card} />
            ) : (
              <ListCard {...card} />
            )}
          </Col>
        ))}
      </Row>
    </GridContainer>
  );
};

export default ShopProductCards;

const ListCard = ({ title, description, rating, reviews, image }) => {
  const [value, setValue] = useState(5);

  return (
    <StyledListCard>
      <CardImgAndDescription>
        <img alt="example" src={image} />
        <div style={{ paddingLeft: "30px" }}>
          <h3>{title}</h3>
          <ListCardPara>{description}</ListCardPara>
          <Rating style={{ display: "flex", alignItems: "center" }}>
            <Rate
              tooltips={desc}
              onChange={setValue}
              value={value}
              style={{ fontSize: "12px", paddingRight: "10px" }}
            />
            {reviews}
            reviews
          </Rating>
          <StyledUl>
            <li>
              16-core Neural Engine for advanced machine learning 8GB of unified
            </li>
            <li>
              memory so everything you do is fast and fluid 256GB of super-fast
            </li>
            <li>
              SSD storage launches apps and opens files 7-core GPU with up to 5
            </li>
            <li> times faster graphics for graphics-intensive</li>
          </StyledUl>
        </div>
      </CardImgAndDescription>
      <SideContent>
        <Price>
          $100.66 <StyledSpan>$45</StyledSpan>
        </Price>
        <Button>Add to Cart</Button>
        <AddToWishlist>
          <a>Add to Wishlist</a>
        </AddToWishlist>
      </SideContent>
    </StyledListCard>
  );
};

const GridContainer = styled.div`
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #eaeaea;
  .ant-col {
    display: flex;
    justify-content: center;
  }
`;

const Rating = styled.div`
  margin-top: 10px;
  color: #999;
  font-size: 14px;
`;

const StyledCard = styled(AntdCard)`
  width: 250px;
`;
const Description = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 4rem;
  font-weight: 500;
`;

const StyledListCard = styled.div`
  width: 100%;
  height: 301px;
  display: flex;
  padding: 16px;
  border: 1px solid #eaeaea;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const SideContent = styled.div`
  width: 30%;
  border-left: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  Button {
    width: 80%;
    height: 3rem;
    margin-top: 10px;
    background-color: orange;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

const AddToWishlist = styled.p`
  color: #999;
  font-size: 14px;
  margin-top: 10px;
`;

const Price = styled.h2`
  margin-top: 10px;
  font-weight: 700;
`;

const CardImgAndDescription = styled.div`
  width: 70%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const ListCardPara = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #041e42;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3rem;
  @media (max-width: 768px) {
    font-size: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.5rem;
  }
`;
const StyledSpan = styled.span`
  padding-left: 10px;
  font-weight: 400;
  text-decoration: line-through;
`;
const StyledUl = styled.ul`
  padding-left: 20px;
  padding-top: 20px;
  li {
    padding-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 2rem;
  }
`;
