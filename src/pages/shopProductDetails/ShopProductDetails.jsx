import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ShopBreadcrumb from "../../Components/shopBreadCrump/ShopBreadCrump";
import ProductDetails from "../../Components/productDetails/ProductDetails";
import ProductMoreInfo from "../../Components/productMoreInfo/ProductMoreInfo";
import ProductSpecs from "../../Components/productSpecs/ProductSpecs";
// import { cardData } from "../../Components/data/Data";
import Vendor from "../../Components/vendor/Vendor";
import ShippingAndReturns from "../../Components/shippingAndReturn/ShippingAndReturn";
import CustomerReviews from "../../Components/customerReviews/CustomerReviews";
import BestSeller from "../../Components/bestSeller/BestSeller";

import {
  cardData,
  saveOn,
  cardDatalistItems,
  saveOnlistItems,
  shopCategoriesListItems,
  nullListItems,
} from "../../Components/data/Data";

const ShopProductDetails = () => {
  const { id } = useParams();
  const filterData = cardData.find((product) => product._id == id);
  return (
    <ShopProductContainer>
      <ShopBreadcrumb
        data={{
          title: filterData.title,
          category: filterData.category,
          subCategory: filterData.subCategory,
        }}
      />
      <ProductDetails />
      <ProductMoreInfo />
      <ProductSpecs />
      <Vendor />
      <ShippingAndReturns />
      <CustomerReviews />
      <BestSeller
        data={cardData}
        listItems={saveOnlistItems}
        heading="Related Products"
        showCarouselButtons={false}
        showAutoplay={false}
      />
      <BestSeller
        data={saveOn}
        listItems={saveOnlistItems}
        heading="You may also like"
        showCarouselButtons={false}
        showAutoplay={false}
      />
    </ShopProductContainer>
  );
};

export default ShopProductDetails;
const ShopProductContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: auto;
`;
