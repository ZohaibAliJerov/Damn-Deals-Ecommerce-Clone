import { useRef } from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import SliderImage1 from "../../assets/pngs/slider1.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const HeroSlider = () => {
  const carouselRef = useRef();

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };
  return (
    <CustomCarousel ref={carouselRef}>
      <SliderText className="carousel-item">
        <SliderOutlineIcons
          className="carousel-control left-control"
          onClick={handlePrevClick}
        >
          <LeftOutlined />
        </SliderOutlineIcons>
        <SliderOutlineIcons
          className="carousel-control right-control"
          onClick={handleNextClick}
        >
          <RightOutlined />
        </SliderOutlineIcons>
        <img src={SliderImage1} alt="" />
        <div className="text-overlay">
          <LimitedEditionButton size="large">
            Limited Edition
          </LimitedEditionButton>
          <Heading>Modern</Heading>
          <Heading>Dinning Chair</Heading>
          <SilderPara>Discover our new items. Up to 25% Off !</SilderPara>
          <ShopNowButton size="large">Shop Now</ShopNowButton>
        </div>
      </SliderText>
      <SliderText className="carousel-item">
        <SliderOutlineIcons
          className="carousel-control left-control"
          onClick={handlePrevClick}
        >
          <LeftOutlined />
        </SliderOutlineIcons>
        <SliderOutlineIcons
          className="carousel-control right-control"
          onClick={handleNextClick}
        >
          <RightOutlined />
        </SliderOutlineIcons>
        <img src={SliderImage1} alt="" />
        <div className="text-overlay">
          <LimitedEditionButton size="large">
            Limited Edition
          </LimitedEditionButton>
          <Heading>Modern</Heading>
          <Heading>Dinning Chair</Heading>
          <SilderPara>Discover our new items. Up to 25% Off !</SilderPara>
          <ShopNowButton size="large">Shop Now</ShopNowButton>
        </div>
      </SliderText>
    </CustomCarousel>
  );
};

export default HeroSlider;

const CustomCarousel = styled(Carousel)`
  max-width: 1400px;
  width: 100%;
  height: auto;
  margin: 2rem auto;
  padding: 0 10px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: auto;
  }

  img {
    border-radius: 10px;
    width: 100%;
    @media (max-width: 768px) {
      height: 30rem;
      object-fit: cover;
    }
  }

  .carousel-item {
    position: relative;
  }

  .text-overlay {
    position: absolute;
    width: 312px;
    height: 292px;
    top: 67%;
    left: 57%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
`;
const Heading = styled.h2`
  font-size: 48px;
  font-weight: 500;
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
const SilderPara = styled.p`
  font-size: 15px;
`;

const ShopNowButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 34px;
  margin-top: 18px;
  font-size: 15px;
  font-weight: 600;
  background-color: #f5c34b;
  color: #041e42;
`;
const SliderText = styled.div`
  /* font-size: 20px; */
`;
const LimitedEditionButton = styled(Button)`
  background-color: #cecbe2;
  color: #041e42;
  font-weight: 600;
`;
const SliderOutlineIcons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 16px;
  z-index: 10;
  &.left-control {
    left: 10px;
    border-radius: 50%;
    padding: 7px 12px;
    background-color: #ffffff;
  }

  &.right-control {
    right: 10px;
    border-radius: 50%;
    padding: 7px 12px;
    background-color: #ffffff;
  }
`;
