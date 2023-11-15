import { FaHackerNews } from "react-icons/fa";
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

import {Navbar, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import NavTopBar from "../NavTopBar";
import './MainNavigation.css'


const MainNavigation = () => {
    return (
        <div>
            <NavTopBar></NavTopBar>
        <Navbar shouldHideOnScroll className="md:mt-[88px] border-b-1 border-blue-400" >
      <NavbarContent className="hidden sm:flex gap-10" justify="between">
        <Dropdown>
          <NavbarItem isActive>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<FaHackerNews></FaHackerNews>}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
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
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category1} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Electronics</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category2} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Beauty</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category3} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Furniture</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category4} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Home Appelience</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category5} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Sports</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category6} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Sequrity Product</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem
            className="dropDownItem"
            key="login"
            >
              <NavLink className="h-full w-full" to={"/login"}>
                <div className="flex w-full h-full justify-start items-center gap-3">
                  <img className="w-8 h-8" src={category7} alt="" />
                  <div>
                    <h2 className="text-base font-semibold">Gaming Product</h2>
                    <p>All Electronics products</p>
                  </div>
                </div>
              </NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
       
        <NavbarItem>
          <Link color="foreground" href="#">
            Beauty
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nothing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Personal Care
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Hello
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nothing
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
        </div>
    );
};

export default MainNavigation;