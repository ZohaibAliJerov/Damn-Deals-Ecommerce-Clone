import React from "react";
import { Row, Col, Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;
import Chai from "../../assets/svgs/blogPostSvg/chaiSvg.svg";
import Chair from "../../assets/svgs/blogPostSvg/chairsSvg.svg";
import Watch from "../../assets/svgs/blogPostSvg/watchSvg.svg";

const CustomCard = ({ imageSrc, title, description, date }) => {
  return (
    <Card
      style={{
        width: 320,
      }}
      cover={<img alt="example" src={imageSrc} />}
    >
      <Meta description={description} />
      <Meta title={title} />
      <Meta description={date} />
    </Card>
  );
};

const BlogPost = () => {
  return (
    <BlogPostCotainer>
      <Row>
        <StyledCol xs={24} sm={24} md={12} lg={12} xl={12}>
          <h1>Blog Posts</h1>
        </StyledCol>
        <StyledCol xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul>
            <li>See All</li>
          </ul>
        </StyledCol>
      </Row>
      <StyledRow>
        <BlogPostCols xs={24} sm={24} md={24} lg={8} xl={8}>
          <CustomCard
            imageSrc={Chair}
            title="Furniture that explores wood as a material"
            description="Tips & Tricks"
            date="April 06, 2020"
          />
        </BlogPostCols>
        <BlogPostCols xs={24} sm={24} md={24} lg={8} xl={8}>
          <CustomCard
            imageSrc={Chai}
            title="Collar brings back coffee brewing ritual"
            description="Tips & Tricks"
            date="April 06, 2020"
          />
        </BlogPostCols>
        <BlogPostCols xs={24} sm={24} md={24} lg={8} xl={8}>
          <CustomCard
            imageSrc={Watch}
            title="Renaissance of the wall clock"
            description="Tips & Tricks"
            date="April 06, 2020"
          />
        </BlogPostCols>
      </StyledRow>
    </BlogPostCotainer>
  );
};

export default BlogPost;

const BlogPostCotainer = styled.div`
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  padding: 10px;
`;

const StyledCol = styled(Col)`
  display: flex;

  ul {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: pointer;
    list-style: none;
  }
  li {
    position: relative;
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
const BlogPostCols = styled(Col)`
  height: auto;
  display: flex;
  justify-content: center;
`;

const StyledRow = styled(Row)`
  margin-top: 2rem;
`;
