import React from "react";
import styled from "styled-components";
import { Row, Col, Button } from "antd";
import visaCard from "../../assets/svgs/footerSvg/visaSvg.svg";
import debutCard from "../../assets/svgs/footerSvg/cardSvg.svg";
import iPay from "../../assets/svgs/footerSvg/ipaySvg.svg";
import descoverCard from "../../assets/svgs/footerSvg/discoverSvg.svg";
import paypal from "../../assets/svgs/footerSvg/paypalSvg.svg";
import amax from "../../assets/svgs/footerSvg/amaxSvg.svg";
import { socialIcons } from "../header/Header";

const payIcons = [
  { src: visaCard, id: 12 },
  { src: debutCard, id: 21 },
  { src: iPay, id: 32 },
  { src: descoverCard, id: 41 },
  { src: paypal, id: 42 },
  { src: amax, id: 44 },
];

const Footer = () => {
  return (
    <FooterContainer>
      <Row>
        <HeadingAndInputCol xs={24}>
          <h2 style={{ fontSize: "28px", fontWeight: "500", color: "#041E42" }}>
            Subscribe and get 20% discount.
          </h2>
          <StyledInput type="text" placeholder="Your email address" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </HeadingAndInputCol>
      </Row>
      <ListRow>
        <ListCol xs={24} sm={24} md={24} lg={8} xl={4}>
          <ListUl>
            <ListLi>
              <h3>Contact Us</h3>
            </ListLi>
            <ListLi>
              Monday-Friday: 08am-9pm
              <br />
              +(1) 123 456 7890
            </ListLi>

            <ListLi>
              Need help with your order?
              <br />
              support@damndeal.com
            </ListLi>
          </ListUl>
        </ListCol>
        <ListCol xs={24} sm={24} md={24} lg={8} xl={4}>
          <ListUl>
            <ListLi>
              <h3>About Zenmart</h3>
            </ListLi>
            <ListLi>Track Your Order</ListLi>
            <ListLi>Product Guides</ListLi>
            <ListLi>Wishlists</ListLi>
          </ListUl>
        </ListCol>
        <ListCol xs={24} sm={24} md={24} lg={8} xl={4}>
          <ListUl>
            <ListLi>
              <h3>Customer Support</h3>
            </ListLi>
            <ListLi>Contact Us</ListLi>
            <ListLi>Help Centre</ListLi>
          </ListUl>
        </ListCol>
        <ListCol xs={24} sm={24} md={24} lg={8} xl={4}>
          <ListUl>
            <ListLi>
              <h3>Services</h3>
            </ListLi>
            <ListLi>Trade-In Program</ListLi>
            <ListLi>Electronics Recycling</ListLi>
            <ListLi>Best Buy Health</ListLi>
          </ListUl>
        </ListCol>
        <ListCol xs={24} sm={24} md={24} lg={8} xl={8}>
          <ListUl>
            <ListLi>
              <h3>Follow Us</h3>
            </ListLi>

            <ListLi>
              {socialIcons.map((item) => (
                <img
                  src={item.src}
                  key={item.id}
                  alt="social icon"
                  style={{
                    padding: "10px",
                  }}
                />
              ))}
            </ListLi>
            <ListLi>Mobile Apps</ListLi>
            <ListLi> iOS App</ListLi>
            <ListLi> Android App</ListLi>
            <ListLi>We Accept</ListLi>
            <ListLi>
              {payIcons.map((item) => (
                <img
                  src={item.src}
                  key={item.id}
                  alt="pay icon"
                  style={{
                    padding: "10px",
                  }}
                />
              ))}
            </ListLi>
          </ListUl>
        </ListCol>
      </ListRow>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: #f3f5f6;
  height: auto;
  margin: 0 auto;
  padding-top: 2rem;
`;
const HeadingAndInputCol = styled(Col)`
  width: 100%;
  text-align: center;
`;
const ListCol = styled(Col)``;
const ListRow = styled(Row)`
  margin-top: 3rem;
  text-align: center;
  color: #041e42;
`;
const ListUl = styled.ul`
  list-style: none;
`;
const ListLi = styled.li`
  padding: 10px;
`;
const StyledInput = styled.input`
  width: 33.75rem;
  height: 60px;
  margin-top: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid #bfb4b4;
  outline: none;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;
const SubscribeButton = styled(Button)`
  height: 60px;
  width: 136px;
  margin-left: 10px;
  color: #041e42;
  font-size: 15px;
  font-weight: 500;
  background-color: #f5c34b;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
