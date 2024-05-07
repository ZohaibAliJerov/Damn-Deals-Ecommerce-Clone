import React from "react";
import { Rate, Progress, Button, Avatar, Collapse } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const CustomerReviews = () => {
  return (
    <CustomerReviewsContainer>
      <Collapse defaultActiveKey={["0"]} accordion>
        <Panel
          header={<StyledPanelHeader>Customer Review</StyledPanelHeader>}
          key="1"
        >
          <ReviewContentBlock showRatingAndProgress={true} />

          <ReviewContentBlock showRatingAndProgress={false} />
        </Panel>
      </Collapse>
    </CustomerReviewsContainer>
  );
};

// ReviewContentBlock component
const ReviewContentBlock = ({ showRatingAndProgress }) => {
  return (
    <div>
      {showRatingAndProgress && (
        <div>
          <StyledRating>
            <h2>4.9</h2>
            <RatingCont>
              <Rate allowHalf defaultValue={5} />
              <p>2 reviews</p>
            </RatingCont>
          </StyledRating>
          <StyledProgress>
            <Progress percent={50} />
            <Progress percent={70} />
            <Progress percent={50} />
            <Progress percent={70} />
            <Progress percent={10} />
          </StyledProgress>
          <ButtonCont>
            <Button>Write Your Review</Button>
          </ButtonCont>
        </div>
      )}
      <StyledReviewsContainer>
        <h4>10 reviews for the product</h4>
        <StyledAvatarCont>
          <div>
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
          <ReviewRateCont>
            <RateAndTitleCont>
              <Rate allowHalf defaultValue={5} style={{ fontSize: "12px" }} />
              <h4>A high performance Mac with a long lasting battery</h4>
            </RateAndTitleCont>
            <ReviewedCont>
              <p>Reviewed by Ali Tufan - April 27, 2022</p>
            </ReviewedCont>
          </ReviewRateCont>
        </StyledAvatarCont>
      </StyledReviewsContainer>
      <RewiewsParaCont>
        <p>
          This is an unusually large advance over previous models, especially in
          raw computing power, but also in fun things like screen and headphone
          support.
        </p>
        <p>
          This Amazon listing has two different processors, the M1 Pro (listed
          as 16-Core GPU "style") and the M1 Max (32-Core GPU). I'll call one
          the Pro, the other the Max. I got the base Pro, but much of what I'll
          say applies to both, and I'll have some comments specifically about
          the Max too. (MBP below = MacBook Pro.)
        </p>
      </RewiewsParaCont>
      <BoxesCont>
        <BoxItems></BoxItems>
        <BoxItems></BoxItems>
        <BoxItems></BoxItems>
        <BoxItems></BoxItems>
      </BoxesCont>
    </div>
  );
};

export default CustomerReviews;

const CustomerReviewsContainer = styled.div`
  padding-top: 20px;
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`;
const StyledRating = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 50px;
  }
`;
const RatingCont = styled.div`
  padding-left: 20px;
`;
const StyledProgress = styled.div`
  width: 30%;
`;
const ButtonCont = styled.div`
  padding-top: 20px;
  Button {
    border: 1px solid orange;
    height: 3rem;
  }
`;
const RateAndTitleCont = styled.div`
  display: flex;
  align-items: center;
  h4 {
    padding-left: 20px;
  }
`;
const ReviewedCont = styled.div`
  padding-top: 20px;
`;
const StyledAvatarCont = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;
const ReviewRateCont = styled.div`
  padding-left: 20px;
`;
const StyledReviewsContainer = styled.div`
  padding-top: 20px;
`;
const StyledPanelHeader = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const RewiewsParaCont = styled.div`
  p {
    padding-top: 20px;
  }
`;
const BoxesCont = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 20px;
`;
const BoxItems = styled.div`
  height: 90px;
  width: 90px;
  background-color: #041e42;
  border-radius: 10px;
`;
