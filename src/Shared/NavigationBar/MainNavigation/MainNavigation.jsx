import { FaAngleDown } from "react-icons/fa";

import {Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import NavTopBar from "../NavTopBar";
import './MainNavigation.css'
import { ListItem, Menu, MenuHandler, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import EachMenuItem from "./EachMenuItem";
import { Link } from "react-router-dom";

import category1 from "../../../../public/category-1.png";
import category2 from "../../../../public/category-2.png";
import category3 from "../../../../public/category-3.png";
import category4 from "../../../../public/category-4.png";
import category5 from "../../../../public/category-5.png";
import category6 from "../../../../public/category-6.png";
import category7 from "../../../../public/category-7.png";
import category8 from "../../../../public/category-8.png";
import category9 from "../../../../public/category-9.png";
import category10 from "../../../../public/category-10.png";
import category11 from "../../../../public/category-11.png";
import category12 from "../../../../public/category-12.png";
import refrigerator from "../../../../public/refrigerator.png";
import iron from "../../../../public/iron.png";
import kettle from "../../../../public/kettle.png";
import AC from "../../../../public/air-conditioner.png";


const MainNavigation = () => {
    const [isHomeOpen, setIsHomeOpen] = useState(false);
    const [isElectricOpen, setIsElectricOpen] = useState(false);
    const [isBeautyOpen, setIsBeautyOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div>
            <NavTopBar></NavTopBar>
        <Navbar className="md:mt-[88px] h-[40px] fixed" >
      <NavbarContent className="hidden sm:flex gap-5" justify="between">
        {/* <Dropdown>
          <NavbarItem>
           
            <DropdownTrigger>
               <div className="flex items-center gap-1"><NavLink to={"/"}>
                Home 
              <FaAngleDown></FaAngleDown>
              </NavLink>
              </div>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-[580px] grid grid-cols-2"
            itemClasses={{
              base: "gap-4",
            }}
            aria-label="Link Actions"
          >
            <DropdownItem
            className="dropDownItem"
            key="electric"
            >
              <Link className="h-full w-full" to={"/"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category1} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Electronics</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <Link className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category2} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Beauty</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="furniture"
            >
              <Link className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category3} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Furniture</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="homee"
            >
              <Link className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category4} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Home Appelience</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="sports"
            >
              <Link className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category5} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Sports</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="sequiry"
            >
              <Link  className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category6} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Sequrity Product</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="gaming"
            >
              <Link className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category7} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Gaming Product</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}



 {/* {Navbar Item 1} */}
        <NavbarItem>
        <Link to={"/"}>
        <Typography as="div" variant="paragraph" className="font-medium ">
            <ListItem
            ripple={false}
              className="flex items-center gap-1 py-2 pr-4 font-medium  !bg-transparent text-gray-900"
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
        <MenuHandler >
        <Typography as="div" variant="pararaph" className="font-medium ">
            <ListItem
            ripple={false}
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent   text-gray-900"
              selected={isHomeOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Electronics
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isHomeOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !bg-[#ffffff] !shadow-lg mx-5 !shadow-gray-400 rounded-xl !p-5 lg:block">
          <ul className="grid grid-cols-3 !bg-[#ffffff] gap-3 gap-y-4 outline-none outline-0">
             <EachMenuItem icon={category10} title={"Electronic Items"} description={"See all Electronic Product"} path={"/electronics"}></EachMenuItem>
             <EachMenuItem icon={refrigerator} title={"Refrigerators"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category9} title={"Televisions"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={iron} title={"Iron Matchines"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={kettle} title={"Kettles"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={AC} title={"Air Collers"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent text-gray-900"
              selected={isElectricOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Kids Zone
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isElectricOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 !bg-transparent font-medium text-gray-900"
              selected={isBeautyOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isBeautyOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem path={"/login"} icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent text-gray-900"
              selected={isBeautyOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isBeautyOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem path={"/login"} icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent text-gray-900"
              selected={isBeautyOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isBeautyOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem path={"/login"} icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent text-gray-900"
              selected={isBeautyOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isBeautyOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem path={"/login"} icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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
              className="flex items-center gap-1 py-2 pr-4 font-medium !bg-transparent text-gray-900"
              selected={isBeautyOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaAngleDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isBeautyOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
              <FaAngleDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaAngleDown>
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="max-w-screen-xl !shadow-lg mx-5 !p-5 !shadow-gray-400 !bg-[#ffffff] rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-4 !bg-[#ffffff] gap-3 outline-none outline-0">
             <EachMenuItem path={"/login"} icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
             <EachMenuItem icon={category1} title={"Electronic"} description={"See all Electronic Product"}></EachMenuItem>
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