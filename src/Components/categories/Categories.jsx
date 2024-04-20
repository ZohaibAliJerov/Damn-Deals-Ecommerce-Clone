import styled from "styled-components";
import { Row, Col } from "antd";
import Electronicsimage from "../../assets/svgs/categoriesSvg/elecronics.svg";
import ShoesImage from "../../assets/svgs/categoriesSvg/cloths.svg";
import MakeupImage from "../../assets/svgs/categoriesSvg/healthandBeauty.svg";
import KitchenImage from "../../assets/svgs/categoriesSvg/homeandKitchen.svg";
import FurnitureImage from "../../assets/svgs/categoriesSvg/homeandFurniture.svg";
import ShopImage from "../../assets/svgs/categoriesSvg/groceryandMarket.svg";
import VidegameImage from "../../assets/svgs/categoriesSvg/toyandGames.svg";
import BabyImage from "../../assets/svgs/categoriesSvg/babiesandMom.svg";

const CategoryItem = ({ imageSrc, categoryName }) => (
  <StyledCol xs={24} sm={12} md={6} lg={3} xl={3}>
    <CategoriesImages>
      <img
        src={imageSrc}
        alt=""
        style={{ width: "42px", height: "42px", objectFit: "contain" }}
      />
    </CategoriesImages>
    <CategoryNames>{categoryName}</CategoryNames>
  </StyledCol>
);

const Categories = () => {
  return (
    <CategoriesContainer>
      <Row>
        <CategoryItem imageSrc={Electronicsimage} categoryName="Electronics" />
        <CategoryItem imageSrc={ShoesImage} categoryName="Clothings" />
        <CategoryItem imageSrc={MakeupImage} categoryName="Health & Beauty" />
        <CategoryItem imageSrc={KitchenImage} categoryName="Home & Kitchen" />
        <CategoryItem
          imageSrc={FurnitureImage}
          categoryName="Home & Furniture"
        />
        <CategoryItem imageSrc={ShopImage} categoryName="Grocery & Market" />
        <CategoryItem
          imageSrc={VidegameImage}
          categoryName="Toy & Video Games"
        />
        <CategoryItem imageSrc={BabyImage} categoryName="Babies and Moms" />
      </Row>
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0 15px;
`;

const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
`;

const CategoriesImages = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f5f6;
  border-radius: 50%;
`;
const CategoryNames = styled.p`
  font-size: 15px;
  color: #041e42;
  font-weight: 500;
`;
