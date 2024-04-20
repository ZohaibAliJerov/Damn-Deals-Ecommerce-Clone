import Header from "../../Components/header/Header";
import HeaderLine from "../../Components/headerLine/HeaderLin";
import HeroSlider from "../../Components/heroSlider/HeroSlider";
import Categories from "../../Components/categories/Categories";
import MajorSavings from "../../Components/majorSavings/MajorSavings";
import BestSeller from "../../Components/bestSeller/BestSeller";
import VirtualRealityHeadset from "../../Components/virtualRealityHeadset/VirtualRealityHeadset";
import VRHeadset from "../../assets/svgs/virtualRealityHeadsetSvg/banners.svg";
import RedVRHeadset from "../../assets/svgs/virtualRealityHeadsetSvg/newRedSvg.svg";
import BlogPost from "../../Components/blogPost/BlogPost";

import {
  cardData,
  saveOn,
  cardDatalistItems,
  saveOnlistItems,
  shopCategoriesListItems,
  nullListItems,
} from "../../Components/data/Data";

const Home = () => {
  return (
    <div>
      <HeaderLine />
      <HeroSlider />
      <Categories />
      <MajorSavings />

      <BestSeller
        data={cardData}
        listItems={cardDatalistItems}
        heading="Best Seller"
        showCarouselButtons={true}
        showAutoplay={true}
      />
      <VirtualRealityHeadset src={VRHeadset} />

      <BestSeller
        data={saveOn}
        listItems={saveOnlistItems}
        heading="Save on TV, video, & home audio"
        showCarouselButtons={true}
        showAutoplay={true}
      />
      <BestSeller
        data={saveOn}
        listItems={shopCategoriesListItems}
        heading="Shop Categories"
        showCarouselButtons={false}
        showAutoplay={false}
      />
      <BestSeller
        data={saveOn}
        listItems={nullListItems}
        showCarouselButtons={false}
        showAutoplay={false}
      />
      <VirtualRealityHeadset src={RedVRHeadset} />
      <BestSeller
        data={cardData}
        listItems={saveOnlistItems}
        heading="Top-rated Products"
        showCarouselButtons={true}
        showAutoplay={true}
      />
      <BlogPost />
    </div>
  );
};

export default Home;
