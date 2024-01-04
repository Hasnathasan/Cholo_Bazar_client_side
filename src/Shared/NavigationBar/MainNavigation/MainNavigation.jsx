import { FaAngleDown } from "react-icons/fa";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import NavTopBar from "../NavTopBar/NavTopBar";
import "./MainNavigation.css";
import {
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import EachMenuItem from "./EachMenuItem";
import { Link, useLocation } from "react-router-dom";

import category1 from "../../../../public/category-1.png";
// import category2 from "../../../../public/category-2.png";
// import category3 from "../../../../public/category-3.png";
// import category4 from "../../../../public/category-4.png";
// import category5 from "../../../../public/category-5.png";
// import category6 from "../../../../public/category-6.png";
// import category7 from "../../../../public/category-7.png";
// import category8 from "../../../../public/category-8.png";
import category9 from "../../../../public/category-9.png";
import category10 from "../../../../public/category-10.png";
// import category11 from "../../../../public/category-11.png";
// import category12 from "../../../../public/category-12.png";
import refrigerator from "../../../../public/refrigerator.png";
import iron from "../../../../public/iron.png";
import kettle from "../../../../public/kettle.png";
import AC from "../../../../public/air-conditioner.png";

const MainNavigation = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isElectricOpen, setIsElectricOpen] = useState(false);
  const [isBeautyOpen, setIsBeautyOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isFurnitureOpen, setIsFurnitureOpen] = useState(false);
  const [isFoodOpen, setIsFoodOpen] = useState(false);
  // const [isBeautyOpen, setIsBeautyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <NavTopBar></NavTopBar>
      <Navbar
        shouldHideOnScroll
        className="md:mt-[80px] h-[40px] fixed hidden md:flex"
      >
        <NavbarContent
          className="hidden sm:flex gap-1 xl:gap-5"
          justify="between"
        >
          {/* {Navbar Item 1} */}
          <NavbarItem>
            <Link to={"/"}>
              <Typography as="div" variant="paragraph" className="font-medium ">
                <ListItem
                  ripple={false}
                  className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                    location.pathname === "/"
                      ? "!text-blue-500"
                      : "text-gray-800"
                  }`}
                  selected={isHomeOpen || isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  Home
                </ListItem>
              </Typography>
            </Link>
          </NavbarItem>

          {/* {Navbar Item 2} */}
          <NavbarItem>
            <Menu
              open={isHomeOpen}
              handler={setIsHomeOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography
                  as="div"
                  variant="pararaph"
                  className="font-medium "
                >
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/electronics")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isHomeOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Electronics
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isHomeOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !bg-[#ffffff] !shadow-lg mx-5 !shadow-gray-400 rounded-xl !p-5 lg:block">
                <ul className="grid grid-cols-3 !bg-[#ffffff] gap-3 gap-y-4 outline-none outline-0">
                  <EachMenuItem
                    icon={category10}
                    title={"Electronic Items"}
                    description={"See all Electronic Product"}
                    path={"/electronics/electronics"}
                  ></EachMenuItem>
                  <EachMenuItem
                    icon={refrigerator}
                    title={"Refrigerators"}
                    description={"See all Electronic Product"}
                    path={"/electronics/refrigerators"}
                  ></EachMenuItem>
                  <EachMenuItem
                    icon={category9}
                    title={"Televisions"}
                    description={"See all Electronic Product"}
                    path={"/electronics/televisions"}
                  ></EachMenuItem>
                  <EachMenuItem
                    icon={iron}
                    title={"Iron Matchines"}
                    description={"See all Electronic Product"}
                    path={"/electronics/irons"}
                  ></EachMenuItem>
                  <EachMenuItem
                    icon={kettle}
                    title={"Kettles"}
                    description={"See all Electronic Product"}
                    path={"/electronics/kettles"}
                  ></EachMenuItem>
                  <EachMenuItem
                    icon={AC}
                    title={"Air Collers"}
                    description={"See all Electronic Product"}
                    path={"/electronics/airCollers"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>

          {/* {Navbar Item 3} */}
          <NavbarItem>
            <Menu
              open={isElectricOpen}
              handler={setIsElectricOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="pararaph" className="font-medium">
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/kidsZone")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isElectricOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Kids Zone
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isElectricOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>

          {/* {Navbar Item 4} */}
          <NavbarItem>
            <Menu
              open={isBeautyOpen}
              handler={setIsBeautyOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="pararaph" className="font-medium">
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/beauty")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isBeautyOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Beauty
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isBeautyOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>
          {/* {Navbar Item 4} */}
          <NavbarItem>
            <Menu
              open={isSportsOpen}
              handler={setIsSportsOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="pararaph" className="font-medium">
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/sports")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isSportsOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Sports
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isSportsOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>
          {/* {Navbar Item 4} */}
          <NavbarItem>
            <Menu
              open={isFurnitureOpen}
              handler={setIsFurnitureOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="pararaph" className="font-medium">
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/furniture")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isFurnitureOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Furniture
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isFurnitureOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>
          {/* {Navbar Item 4} */}
          <NavbarItem>
            <Menu
              open={isFoodOpen}
              handler={setIsFoodOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="pararaph" className="font-medium">
                  <ListItem
                    ripple={false}
                    className={`flex items-center text-sm xl:text-base gap-1 py-2 pr-4 font-medium !bg-transparent  ${
                      location.pathname?.includes("/food")
                        ? "text-blue-500"
                        : "text-gray-700"
                    }`}
                    selected={isFoodOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Food Item
                    <FaAngleDown
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isFoodOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                    <FaAngleDown
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    ></FaAngleDown>
                  </ListItem>
                </Typography>
              </MenuHandler>

              <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                  <EachMenuItem
                    path={"/comming-soon"}
                    icon={category1}
                    title={"Electronic"}
                    description={"See all Electronic Product"}
                  ></EachMenuItem>
                </ul>
              </MenuList>
            </Menu>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default MainNavigation;
