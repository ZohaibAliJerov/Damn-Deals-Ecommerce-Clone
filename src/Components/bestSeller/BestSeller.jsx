import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Row, Col, Card, Rate, Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const BestSeller = (props) => {
  const [value, setValue] = useState(5);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  const carouselRef = useRef();
  useEffect(() => {
    function handleResize() {
      setSlidesToShow(getSlidesToShow());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSlidesToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      return 5;
    } else if (screenWidth >= 992) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  }
  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <BestSellerContainer>
      <div>
        <Row>
          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <h1>{props.heading}</h1>
          </Col>
          <Col xs={0} sm={24} md={16} lg={16} xl={16}>
            <StyledUl>
              {props.listItems.map((item) => (
                <li key={item.key}>{item.name}</li>
              ))}
            </StyledUl>
          </Col>
        </Row>
      </div>
      <div style={{ marginTop: "20px" }}>
        <StyledCarousel ref={carouselRef} slidesToShow={slidesToShow} autoplay>
          {props.data.map((data) => (
            <StyledCard key={data.key}>
              <Card
                hoverable
                style={{
                  width: 200,
                  height: 350,
                  margin: "0 auto",
                }}
                cover={<img alt="example" src={data.image} />}
              >
                <Meta description={data.brand} />
                <Meta title={data.title} />
                <Rate
                  tooltips={desc}
                  onChange={setValue}
                  value={value}
                  style={{ fontSize: 10 }}
                />
                <span>{data.reviews} reviews</span>
                <Meta title={data.price} />
              </Card>
            </StyledCard>
          ))}
        </StyledCarousel>
      </div>
      {props.showCarouselButtons && (
        <>
          <StyledArrowRight onClick={handleNext}>
            <RightCircleOutlined />
          </StyledArrowRight>
          <StyledArrowLeft onClick={handlePrev}>
            <LeftCircleOutlined />
          </StyledArrowLeft>
        </>
      )}
    </BestSellerContainer>
  );
};

BestSeller.defaultProps = {
  showCarouselButtons: true,
  showAutoplay: true,
};

export default BestSeller;

const BestSellerContainer = styled.div`
  height: auto;
  max-width: 1400px;
  width: 100%;
  padding: 10px;
  margin: 3rem auto 0 auto;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  list-style: none;
  height: 100%;
  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-start;
  }

  li {
    position: relative;
    cursor: pointer;
    transition: color 0.3s;
  }

  li::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }
  li:hover {
    color: #041e42;
  }

  li:hover::after {
    background-color: #041e42;
  }
`;

const StyledCarousel = styled(Carousel)`
  position: relative;
  height: auto;
  .slick-slide {
    padding: 0 10px;
  }
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledArrowLeft = styled.div`
  width: 3rem;
  font-size: 30px;
  top: 50%;
  left: 0;
  transform: translateY(-16rem);
  z-index: 1;
  cursor: pointer;
  color: #112137;
  position: sticky;
`;

const StyledArrowRight = styled.div`
  position: sticky;
  width: 3rem;
  top: 50%;
  left: 96%;
  transform: translateY(-13rem);
  z-index: 999;
  display: flex;
  justify-content: end;
  cursor: pointer;
  color: #112137;
  font-size: 30px;
`;
