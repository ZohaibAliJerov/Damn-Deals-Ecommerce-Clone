import React from "react";
import { Table } from "antd";
import Tissue from "../../assets/svgs/bestSellerSvgs/tissuSvg.svg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { cardData } from "../data/Data";
import { Collapse } from "antd";

const rawData = [
  {
    key: 1,
    image: Tissue,
    brand: "SAMSUNG",
    title: "Great Value Ultra Strong Paper Towels, Split Sheets, 6 Double",
    price: "$123.50 $45",
    reviews: 12,
    category: "Electronics",
    subCategory: "Laptop",
  },
];

const transformedData = rawData.map((item) => {
  return Object.entries(item).map(([key, value]) => ({
    key,
    value,
  }));
})[0];

const columns = [
  {
    dataIndex: "key",
    key: "key",
  },
  {
    dataIndex: "value",
    key: "value",
    render: (text, record) => {
      return text;
    },
  },
];
const text = (
  <ul>
    <li>16-inch MacBook Pro</li>
    <li>140W USB‑C Power Adapter</li>
    <li>USB‑C to MagSafe 3 Cable (2 m)</li>
  </ul>
);
const items = [
  {
    key: "1",
    label: "What's Included",
    children: text,
  },
];

const ProductSpecs = () => {
  const rowClassName = (record, index) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <DetailsandSpecsContainer>
      <hr />
      <StyledHeading>Details & Specs</StyledHeading>
      <StyledTable
        columns={columns}
        dataSource={transformedData}
        rowClassName={rowClassName}
        showHeader={false}
        pagination={false}
      />

      <StyledWhatsIncluded>
        <Collapse items={items} bordered={false} />
      </StyledWhatsIncluded>
    </DetailsandSpecsContainer>
  );
};

export default ProductSpecs;

const DetailsandSpecsContainer = styled.div`
  padding-top: 20px;
`;
const StyledHeading = styled.h3`
  padding-top: 20px;
`;
const StyledTable = styled(Table)`
  padding-top: 20px;
  .even-row {
    background-color: #f3f5f6;
  }

  .odd-row {
    background-color: #ffffff;
  }
`;
const StyledWhatsIncluded = styled.div`
  padding-top: 20px;
`;