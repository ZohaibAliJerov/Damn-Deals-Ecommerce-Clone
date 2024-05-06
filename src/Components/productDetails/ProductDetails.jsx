import React, { useRef, useState } from "react";
import { Row, Col, Rate, Button } from "antd";
import styled from "styled-components";
import Shoes1 from "../../assets/svgs/productDetailsSvgs/1.jpg";
import Shoes2 from "../../assets/svgs/productDetailsSvgs/2.jpg";
import Shoes3 from "../../assets/svgs/productDetailsSvgs/56.jpg";
import {
  PlusOutlined,
  MinusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(Shoes1);
  const imageRefs = useRef([]);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <StyledRow>
      <StyledCol sm={24} md={24} lg={2}>
        {[Shoes1, Shoes2, Shoes3].map((image, index) => (
          <StyledSmallImages
            key={index}
            ref={(ref) => (imageRefs.current[index] = ref)}
            src={image}
            alt={`Product Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </StyledCol>
      <MiddleCol sm={24} md={24} lg={14}>
        <MainImage src={selectedImage} alt="Selected Product Image" />
        <h4>Overview</h4>
        <p>
          The first notebook of its kind, this Apple MacBook Pro is a beast.
          With the blazing-fast M1 Pro chip — the first Apple silicon designed
          for pros — you get groundbreaking performance and amazing battery
          life. Add to that a stunning Liquid Retina XDR display, the best
          camera and audio ever in a Mac notebook, and all the ports you need.
        </p>
      </MiddleCol>
      <LastCol sm={24} md={24} lg={7}>
        <div style={{ paddingLeft: "10px" }}>
          <div>
            <ProductNameRating>
              <p>Apple</p>
              <RatingStars allowHalf defaultValue={5} />
              <p>1045 reviews</p>
            </ProductNameRating>
            <div>
              <ProductHeading>
                Apple MacBook Pro 16" (2021) - Space Grey (Apple M1 Pro Chip /
                1TB SSD / 16GB RAM)
              </ProductHeading>
            </div>
            <StyledHr />
          </div>
          <StyledPriceCont>
            <PricePara>
              $3.339
              <span style={{ textDecoration: "line-through" }}> $556.964</span>
            </PricePara>
            <div>
              <AddToCartButtonContainer>
                <div>
                  <MinusOutlined />
                  <p>12</p>
                  <PlusOutlined />
                </div>

                <StyledButton>Add to Cart</StyledButton>
              </AddToCartButtonContainer>
              <BuyNowContainer>
                <Button>Buy Now</Button>
                <ul>
                  <li>wish list</li>
                  <li>compare </li>
                  <li>ask a question</li>
                  <li>Share</li>
                </ul>
              </BuyNowContainer>
            </div>
            <StyledHr />
          </StyledPriceCont>
          <ShippingDetails>
            <p>Free shipping, arrives by Thu, Jun 2 to Sacramento, 95829</p>
            <p>Want it faster? Add an address to see options More options</p>
            <p style={{ paddingTop: "20px" }}>Sold and shipped by</p>
            <p>TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</p>
            <RatingandSellerReview>
              <RatingStars allowHalf defaultValue={5} />
              <p>1045 seller reviews</p>
            </RatingandSellerReview>
            <p>TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</p>
          </ShippingDetails>
          <SellerOptionsContainer>
            <h3>More seller options (2)</h3>
            <p>Starting from $1,249.00</p>
            <p>Compare all sellers</p>
          </SellerOptionsContainer>
        </div>
      </LastCol>
    </StyledRow>
  );
};

export default ProductDetails;
const StyledRow = styled(Row)`
  display: flex;
  padding-top: 20px;
`;

const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 992px) {
    width: 100%;
    order: 2;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-top: 10px;
  }
`;
const MiddleCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  h4 {
    padding-top: 1.5rem;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  p {
    padding-top: 2rem;
    line-height: 30px;
    font-size: 15px;
    font-weight: 400;
    text-align: start;
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    order: 1;
  }
`;

const LastCol = styled(Col)`
  border: 1px solid #eaeaea;
  @media screen and (max-width: 992px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    margin-top: 5px;
    order: 3;
  }
`;

const MainImage = styled.img`
  width: 90%;
  height: 80vh;
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledSmallImages = styled.img`
  width: 80px;
  height: 80px;
  border-bottom: 1px solid black;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ProductNameRating = styled.div`
  display: flex;
  padding-top: 10px;
  p {
    padding-left: 15px;
  }
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;
const ProductHeading = styled.h2`
  font-size: 22px;
  padding-top: 10px;
  font-weight: 500;
`;
const RatingStars = styled(Rate)`
  font-size: 15px;
  padding-left: 15px;
`;
const StyledPriceCont = styled.div`
  padding-top: 10px;
  p {
    padding-top: 10px;
    font-size: 22px;
    font-weight: 600;
  }
`;
const AddToCartButtonContainer = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  padding-top: 10px;
  div {
    width: 30%;
    height: 52px;
    display: flex;
    justify-content: space-evenly;
    border-radius: 32px;
    border: 1px solid black;
    @media screen and (max-width: 992px) {
      width: 40%;
    }
  }
`;
const StyledButton = styled(Button)`
  width: 60%;
  height: 52px;
  border-radius: 32px;
  background-color: orange;
  font-weight: 500;
  @media screen and (max-width: 992px) {
    width: 50%;
  }
`;
const BuyNowContainer = styled.div`
  padding-top: 20px;
  Button {
    width: 100%;
    height: 52px;
    margin-top: 20px;
    border-radius: 32px;
    border: 1px solid orange;
    font-weight: 600;
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 2rem;
    padding-top: 20px;
    @media screen and (max-width: 992px) {
      gap: 2rem;
    }
  }
`;
const PricePara = styled.p`
  span {
    padding-left: 15px;
    font-size: 15px;
    color: #626974;
  }
  @media screen and (max-width: 992px) {
    text-align: center;
  }
`;

const StyledHr = styled.hr`
  margin-top: 20px;
`;
const ShippingDetails = styled.div`
  padding-top: 20px;
`;
const RatingandSellerReview = styled.div`
  display: flex;
  padding-top: 20px;
  p {
    padding-left: 15px;
  }
`;

const SellerOptionsContainer = styled.div`
  padding-top: 20px;
  p {
    padding-top: 10px;
  }
`;
