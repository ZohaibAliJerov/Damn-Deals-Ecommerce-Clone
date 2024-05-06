import React, { useState } from "react";
import styled from "styled-components";
import ShopBreadcrumb from "../../Components/shopBreadCrump/ShopBreadCrump";
import HeroSlider from "../../Components/heroSlider/HeroSlider";
import ShopPageSideFilter from "../../Components/shopPageSideFilter/ShopPageSideFilter";
import ShopPageCheckboxFilters from "../../Components/shopPageCheckboxFilters/ShopPageCheckboxFilters";
import ShopFilterRow from "../../Components/shopFilterRow/ShopFilterRow";
import ShopPageHeading from "../../Components/shopPageHeadings/ShopPageHeadings";
import ShopProductCards from "../../Components/shopProductCards/ShopProductCards";
import ShopPagination from "../../Components/shopPagination/ShopPagination";
import { cardData, CategoryData } from "../../Components/data/Data";
import { useParams } from "react-router-dom";

import { Row, Col } from "antd";

const ShopPageWithSideFilter = () => {
  const { id } = useParams();

  const [view, setView] = useState("grid");

  const handleGridView = () => {
    setView("grid");
  };

  const handleListView = () => {
    setView("list");
  };
  const filterData = cardData.find((product) => product._id == id);
  return (
    <SideFilterContainer>
      <ShopBreadcrumb
        data={{
          title: filterData.title,
          category: filterData.category,
          subCategory: filterData.subCategory,
        }}
      />
      <HeroSlider height={420} />
      <MainContainer>
        <div>
          <div>
            <ShopPageSideFilter />
          </div>
          <div>
            <ShopPageCheckboxFilters
              title="CPU Manufacturer"
              options={["AMD", "Apple", "Intel", "NVIDIA", "Qualcomm"]}
            />
            <ShopPageCheckboxFilters
              title="Memory Capacity"
              options={["16 GB", "32GB", "64GB", "128GB", "1TB"]}
            />
            <ShopPageCheckboxFilters
              title="Screen Size"
              options={[
                "17 Inches & Above ",
                "16 to 16.9 Inches",
                "15 to 15.9 Inches",
                "14 to 14.9 Inches",
                "13 to 13.9 Inches",
              ]}
            />
            <ShopPageCheckboxFilters
              title="Display Resolution"
              options={[
                "1024 x 600 pixel",
                "1024 x 768 pixel",
                "1280 x 720 pixel",
                "1280 x 800 pixel",
                "1366 x 768 pixel",
              ]}
            />
            <ShopPageCheckboxFilters
              title="Customer Rating"
              options={["AMD", "Apple", "Intel", "NVIDIA", "Qualcomm"]}
            />
            <ShopPageCheckboxFilters
              title="Condition"
              options={["New", "Used", "Renew"]}
            />
          </div>
        </div>
        <div>
          <ShopPageHeading title="Laptop and accessories" />
          <ShopFilterRow
            handleGridView={handleGridView}
            handleListView={handleListView}
          />
          <ShopProductCards view={view} />
          <ShopPagination />
        </div>
      </MainContainer>
    </SideFilterContainer>
  );
};

export default ShopPageWithSideFilter;

const SideFilterContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: auto;
`;

const MainContainer = styled.div`
  display: flex;
`;
