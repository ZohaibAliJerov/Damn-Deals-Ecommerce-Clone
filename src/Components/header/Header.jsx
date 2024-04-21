import { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import styled from "styled-components";
import logo from "../../assets/svgs/logoHorizontal 1.svg";
import searchicon from "../../assets/svgs/search.svg";
import facebook from "../../assets/svgs/facebook.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import linkedin from "../../assets/svgs/linkedin.svg";

export const socialIcons = [
  { src: facebook, id: 1 },
  { src: twitter, id: 2 },
  { src: instagram, id: 3 },
  { src: linkedin, id: 4 },
];

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <HeaderContainer className="header">
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={0}>
          <HandburgerButton
            icon={<MenuOutlined />}
            className="menu-button"
            type="primary"
            onClick={toggleDrawer}
          >
            Menu
          </HandburgerButton>
        </Col>
        <Col xs={0} sm={0} md={8} lg={12} xl={12}>
          <p>Free Express Shipping on orders $200!</p>
        </Col>
        <Col xs={0} sm={0} md={16} lg={12} xl={12}>
          <ul
            style={{
              display: "flex",
              justifyContent: "end",
              listStyle: "none",
              gap: "1rem",
            }}
          >
            {[
              { title: "English / USD", id: 1 },
              { title: "Help Center", id: 2 },
              { title: "Find a Store", id: 3 },
              { title: "Follow Us", id: 4 },
            ].map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
            {socialIcons.map((item) => (
              <img src={item.src} key={item.id} alt="social icon" />
            ))}
          </ul>
        </Col>
      </Row>
      {/* ----------------lower navbar-------------- */}
      <Row
        justify="space-between"
        align="middle"
        className="header-row"
        style={{ height: "50px", marginTop: "12px" }}
      >
        <Col xs={0} sm={0} md={5} lg={4} xl={4}>
          <img src={logo} alt="Logo" />
        </Col>

        <Col xs={0} sm={0} md={10} lg={13} xl={14}>
          <RightContent className="right-content">
            <SearchInput type="text" placeholder="Search..." />
            <FilterDropdown className="filter-dropdown">
              <option value="all">All Categories</option>
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
              <option value="filter3">Filter 3</option>
            </FilterDropdown>
            <SearchIcon className="search-icon">
              <img src={searchicon} alt="search icon" />
            </SearchIcon>
          </RightContent>
        </Col>
        <Col xs={0} sm={0} md={9} lg={7} xl={6}>
          <NavNamesAndIcons>
            {[
              {
                icon: <IoIosHeartEmpty style={{ marginRight: "4px" }} />,
                title: "Wish List",
                id: 5,
              },
              {
                icon: <FaRegUser style={{ marginRight: "4px" }} />,
                title: "My Account",
                id: 6,
              },
              {
                icon: <IoCartOutline style={{ marginRight: "4px" }} />,
                title: "Cart",
                id: 7,
              },
            ].map((item) => (
              <li key={item.id}>
                {item.icon}
                {item.title}
              </li>
            ))}
          </NavNamesAndIcons>
        </Col>
      </Row>
      <Drawer
        placement="right"
        closable={false}
        onClose={toggleDrawer}
        visible={showDrawer}
      >
        {/* ------------drawer Content--------- */}
        <div
          className="drawer-content"
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div className="logo" style={{ width: "100%", display: "flex" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </div>
          <RightContent className="right-content">
            <SearchInput type="text" placeholder="Search products ..." />
            <FilterDropdown className="filter-dropdown">
              <option value="all">All Categories</option>
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
              <option value="filter3">Filter 3</option>
            </FilterDropdown>
            <SearchIcon className="search-icon">
              <img src={searchicon} />
            </SearchIcon>
          </RightContent>
          <NavNamesAndIconsDrawer style={{ gap: "2rem", paddingTop: "3rem" }}>
            {[
              {
                src: <IoIosHeartEmpty style={{ fontSize: "2rem" }} />,
                title: "Wish List",
                id: 5,
              },
              {
                src: <FaRegUser style={{ fontSize: "2rem" }} />,
                title: "My Account",
                id: 6,
              },
              {
                src: <IoCartOutline style={{ fontSize: "2rem" }} />,
                title: "Cart",
                id: 7,
              },
            ].map((item) => (
              <li key={item.id} style={{ display: "flex", fontSize: "20px" }}>
                <div>{item.src}</div>
                <div style={{ paddingLeft: "13px" }}>{item.title}</div>
              </li>
            ))}
          </NavNamesAndIconsDrawer>
        </div>
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 124px;
  margin: 0 auto;
  padding: 15px 10px;
  @media (max-width: 767px) {
    height: 65px;
    padding: 0;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f8fa;
  border-radius: 26px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #f5f8fa;
  width: 100%;
  border-radius: 26px 0 0 26px;
  height: 3rem;
  padding-left: 20px;
`;

const FilterDropdown = styled.select`
  background-color: #f5f8fa;
  border: none;
  height: 2rem;
  border-left: 1px solid #d6d6d6;
  width: 12rem;
  text-align: center;
`;

const SearchIcon = styled.button`
  background: transparent;
  border: none;
  width: 5rem;
`;

const NavNamesAndIcons = styled.ul`
  list-style: none;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  color: black;
  justify-content: space-around;
  width: 100%;
`;
const HandburgerButton = styled(Button)`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background: transparent;
  color: black;
  font-size: 20px;
  font-weight: 600;
`;
const NavNamesAndIconsDrawer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
