import React from "react";
import { Row, Col, Select, Button } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const { Option } = Select;
import { useParams } from "react-router-dom";

const ShopFilterRow = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleAllFiltersClick = () => {
    navigate(`/shoppagewithsidefilter/${id}`);
  };
  return (
    <FilterContainer>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <HiddenOnMd>
            <Button
              className="ant-select-selector"
              onClick={handleAllFiltersClick}
            >
              All Filters
            </Button>
            <Select defaultValue="Price">
              <Option value="Price">Price</Option>
              <Option value="Low to High">Low to High</Option>
              <Option value="High to Low">High to Low</Option>
            </Select>
            <Select defaultValue="Brand">
              <Option value="Brand">Brand</Option>
              <Option value="Low to High">Low to High</Option>
              <Option value="High to Low">High to Low</Option>
            </Select>
            <Select defaultValue="Color">
              <Option value="Color">Color</Option>
              <Option value="Low to High">Low to High</Option>
              <Option value="High to Low">High to Low</Option>
            </Select>
          </HiddenOnMd>
        </Col>
        <StyledCol xs={24} sm={24} md={12} lg={12} xl={12}>
          <VisibleOnMd>
            <Button className="ant-select-selector" style={{ width: "100%" }}>
              All Filters
            </Button>
          </VisibleOnMd>
          <HiddenOnSm>
            <Select defaultValue="Default Sorting">
              <Option value="Default Sorting">Default Sorting</Option>
              <Option value="Low to High">Low to High</Option>
              <Option value="High to Low">High to Low</Option>
            </Select>
          </HiddenOnSm>

          <Button.Group>
            <Button onClick={props.handleGridView}>Grid</Button>
            <Button onClick={props.handleListView}>List</Button>
          </Button.Group>
        </StyledCol>
      </Row>
    </FilterContainer>
  );
};

export default ShopFilterRow;

const FilterContainer = styled.div`
  padding-top: 1rem;
`;
const HiddenOnMd = styled.div`
  display: flex;
  gap: 1rem;
  .ant-select-selector {
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const VisibleOnMd = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    justify-content: start;
    width: 100%;
  }
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const HiddenOnSm = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 576px) {
    display: none;
  }
`;
