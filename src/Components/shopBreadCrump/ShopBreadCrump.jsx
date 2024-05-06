import React from "react";
import { Breadcrumb } from "antd";

const ShopBreadcrumb = (props) => {
  const breadCrumbFilterData = [
    { title: "Home" },
    { title: props.data.category },
    { title: props.data.subCategory },
    { title: props.data.title },
  ];
  return <Breadcrumb items={breadCrumbFilterData} />;
};
export default ShopBreadcrumb;
