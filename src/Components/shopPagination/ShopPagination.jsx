import React, { useState } from "react";
import { Pagination } from "antd";
import styled from "styled-components";

const ShopPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContainer>
      <div>
        <StyledPagination
          current={currentPage}
          total={100}
          onChange={handleChange}
          itemRender={(page, type, originalElement) => {
            if (type === "page") {
              return (
                <StyledPageNumber
                  className={page === currentPage ? "active" : ""}
                  onClick={() => handleChange(page)}
                >
                  {page}
                </StyledPageNumber>
              );
            }
            return originalElement;
          }}
        />
      </div>
      <StyledPara>1 – 20 of 300+ properties found</StyledPara>
    </PaginationContainer>
  );
};

export default ShopPagination;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-top: 2rem;
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  .ant-pagination-item-active {
    background-color: orange;
    border-radius: 50%;
    border: none;
  }

  .ant-pagination-prev,
  .ant-pagination-next {
    border-radius: 50%;
    border: 1px solid #eaeaea;
  }
`;

const StyledPageNumber = styled.span`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  &.active {
    background-color: orange;
    border-radius: 50%;
  }
`;
const StyledPara = styled.p`
  text-align: center;
  padding-top: 1rem;
  word-spacing: 8px;
`;
