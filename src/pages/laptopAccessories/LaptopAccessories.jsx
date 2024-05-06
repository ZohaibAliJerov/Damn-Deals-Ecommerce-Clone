import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ShopProductCards from "../../Components/shopProductCards/ShopProductCards";
import ShopPageHeadings from "../../Components/shopPageHeadings/ShopPageHeadings";
import ShopBreadcrumb from "../../Components/shopBreadCrump/ShopBreadCrump";
import ShopFilterRow from "../../Components/shopFilterRow/ShopFilterRow";
import ShopPagination from "../../Components/shopPagination/ShopPagination";
import { cardData, CategoryData } from "../../Components/data/Data";

const LaptopAccessories = () => {
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
    <LaptopAccessoriesContainer>
      <ShopBreadcrumb
        data={{
          title: filterData.title,
          category: filterData.category,
          subCategory: filterData.subCategory,
        }}
      />
      <ShopPageHeadings
        title="Laptops and Accessories"
        description="Shop laptops, desktops, monitors, tablets, PC gaming, hard drives and storage, accessories and more"
      />
      <ShopFilterRow
        handleGridView={handleGridView}
        handleListView={handleListView}
      />
      <ShopProductCards view={view} />
      <ShopPagination />
    </LaptopAccessoriesContainer>
  );
};

export default LaptopAccessories;

const LaptopAccessoriesContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: auto;
`;
