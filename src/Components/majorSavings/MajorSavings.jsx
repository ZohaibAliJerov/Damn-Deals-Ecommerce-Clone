import React from "react";
import styled from "styled-components";
import { Card, Row, Col } from "antd";
const { Meta } = Card;
import CardFashion from "../../assets/svgs/majorsavingsSvg/card1.svg";
import CardTech from "../../assets/svgs/majorsavingsSvg/cardearphonesSVG.svg";
import CardVegShop from "../../assets/svgs/majorsavingsSvg/cardvegatablesSvg.svg";
import CardSofa from "../../assets/svgs/majorsavingsSvg/cardsofaSVG.svg";
import CardYoga from "../../assets/svgs/majorsavingsSvg/cardsporstsSvg.svg";
import CardElectronics from "../../assets/svgs/majorsavingsSvg/cardCameraSvg.svg";

const cardData = [
  {
    key: 1,
    title: "Up to 40% off fashion",
    imageUrl: CardFashion,
  },
  {
    key: 2,
    title: "Up to 25% off tech",
    imageUrl: CardTech,
  },
  {
    key: 3,
    title: "Up to 75% off grocery",
    imageUrl: CardVegShop,
  },
  {
    key: 4,
    title: "Up to 30% off home",
    imageUrl: CardSofa,
  },
  {
    key: 5,
    title: "Up to 15% off sports",
    imageUrl: CardYoga,
  },
  {
    key: 6,
    title: "Up to 25% off electronics",
    imageUrl: CardElectronics,
  },
];

const MajorSavings = () => {
  return (
    <MajorSavingsContainer>
      <MajorHeading>Major Savings</MajorHeading>
      <StyledRow justify="center">
        {cardData.map((data) => (
          <StyledCol key={data.key} xs={24} sm={24} md={8} lg={8} xl={8}>
            <StyledCard cover={<img alt="example" src={data.imageUrl} />}>
              <Meta title={data.title} />
            </StyledCard>
          </StyledCol>
        ))}
      </StyledRow>
    </MajorSavingsContainer>
  );
};

export default MajorSavings;

const MajorSavingsContainer = styled.div`
  max-width: 1254px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid #eaeaea;
  padding: 10px;
`;
const MajorHeading = styled.h2`
  color: #041e42;
  font-weight: 500;
  size: 20px;
  max-width: 1069px;
  margin: 10px auto;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const StyledRow = styled(Row)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;
const StyledCard = styled(Card)`
  height: auto;
  width: 250px;
  max-width: 369.23px;
  margin-top: 10px;
  border: none;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
