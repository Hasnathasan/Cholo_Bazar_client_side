import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rokomari_logo from "../../../../public/rokomari_logo.png";
import cart from "../../../../public/cart.png";
import "./NavTopBar.css";
import {
  FaAngleDown,
  FaCalculator,
  FaHome,
} from "react-icons/fa";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import hamBurger from "../../../../public/hamburger.png";
import userIcon from "../../../../public/user.svg";
import notificationIcon from "../../../../public/appointment-reminders.png";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../Hooks/useUser";
import refrigerator from "../../../../public/refrigerator.png";
import category9 from "../../../../public/category-9.png";
import category10 from "../../../../public/category-10.png";
import iron from "../../../../public/iron.png";
import kettle from "../../../../public/kettle.png";
import AC from "../../../../public/air-conditioner.png";
import { useForm } from "react-hook-form";

const NavTopBar = () => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [openAccordian, setOpenAccordian] = useState(0);
  const [openRight, setOpenRight] = useState(false);
  const [userData, isUserDataLoading] = useUser();

  const handleOpen = (value) => {
    setOpenAccordian(openAccordian === value ? 0 : value);
  };
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSearch = (data) => {
    console.log(data);
    navigate(`/electronics/search/${data?.name}`)
  }


  return (
    <>
      <Navbar className="pt-[1px] md:py-2 w-full overflow-hidden md:!fixed top-0 z-50 nav bg-white">
        <div className="md:hidden">
          <img
            className="w-5 h-5 md:w-6"
            onClick={openDrawer}
            src={hamBurger}
            alt=""
          />
        </div>
        <NavbarBrand className="h-full">
          <Link to="/">
            <img
              className="w-20 !h-full md:w-36"
              src={rokomari_logo}
              alt="Logo of CholoBazar.com"
            />
          </Link>
        </NavbarBrand>

        <form onSubmit={handleSubmit(onSearch)} className="md:flex rounded-md hidden max-w-xl">
          <Select
            radius="none"
            labelPlacement="outside-left"
            defaultSelectedKeys={["products"]}
            className="max-w-[20%] rounded-l !h-[43px] border-b-2 border-orange-500 !bg-[#ebebeb] w-40"
          >
            <SelectItem key={"products"} value={"products"}>
              Products
            </SelectItem>
            <SelectItem key={"books"} value={"books"}>
              Books
            </SelectItem>
          </Select>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border lg:w-[200px] xl:w-[545px] border-gray-200 border-b-2 border-b-orange-500 !outline-none p-2"
          />
          <button className=" px-[14px] bg-blue-400 border-2 rounded-r border-blue-400 ">
            <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="flex justify-between items-center gap-4 md:gap-7">
          <Link to={"/myCart"}>
            <img className="w-6 md:w-9" src={cart} alt="" />
          </Link>
          <button>
            <img className="w-6 md:w-9" src={notificationIcon} alt="" />
          </button>
          {user ? (
            <>
              <div className="hidden lg:block">
                <Dropdown shouldBlockScroll className="dropdown-classes">
                  <DropdownTrigger>
                    <button className="px-4 py-2 border flex items-center gap-2 border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                      <img
                        className="w-9 h-9 rounded-full"
                        src={user.photoURL || userIcon}
                        alt=""
                      />{" "}
                      {user?.displayName}
                    </button>
                  </DropdownTrigger>
                  {userData?.userRole === "admin" ? (
                    <DropdownMenu
                      aria-label="Dropdown Variants"
                      color={"default"}
                      variant={""}
                      itemClasses={{ padding: "0px" }}
                      className="dropdownMenuClasses"
                    >
                      <DropdownItem key="account">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/my-section/profile"}
                        >
                          My Account
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="admin-dashboard">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/admin-dashboard/"}
                        >
                          Admin Dashboard
                        </Link>
                      </DropdownItem>

                      <DropdownItem key="signOut" onClick={logout}>
                        <span className="block text-base font-normal hover:text-blue-600 py-2">
                          Sign Out
                        </span>
                      </DropdownItem>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenu
                      aria-label="Dropdown Variants"
                      color={"default"}
                      variant={""}
                      itemClasses={{ padding: "0px" }}
                      className="dropdownMenuClasses"
                    >
                      <DropdownItem key="account">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/my-section/profile"}
                        >
                          My Account
                        </Link>
                      </DropdownItem>
                      {}
                      <DropdownItem key="order">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/myOrders"}
                        >
                          My Orders
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="free-book">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          Download Free Book
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="ebook">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My eBook Library
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="list">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My List
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="book-self">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Book Shelf
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="wishlist">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Wishlist
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="rating-review">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Rating Reviews
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="points">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Points
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="followed-authors">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Following Authors
                        </Link>
                      </DropdownItem>
                      <DropdownItem showDivider={true} key="bkash-account">
                        <Link
                          className="block text-base font-normal hover:text-blue-600 py-[5px]"
                          to={"/comming-soon"}
                        >
                          My Bkash Account
                        </Link>
                      </DropdownItem>
                      <DropdownItem key="signOut" onClick={logout}>
                        <span className="block text-base font-normal hover:text-blue-600 py-2">
                          Sign Out
                        </span>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </Dropdown>
              </div>
              <img
                className={` lg:hidden ${
                  user.photoURL ? "rounded-full w-7 h-7" : "w-6 h-6"
                }`}
                onClick={openDrawerRight}
                src={user.photoURL || userIcon}
                alt=""
              />
            </>
          ) : (
            <Link to="/login">
              <button className="px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                Sign In
              </button>
            </Link>
          )}
        </div>
        <div></div>
      </Navbar>
      <form className="hidden mt-5 w-full rounded-sm overflow-hidden  max-w-lg md:mx-auto px-4">
        <input
          type="text"
          className="w-full  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2"
        />
        <button className=" px-3 bg-blue-500 border-2 border-blue-500 rounded-r">
          <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
        </button>
      </form>
      <Drawer open={open} onClose={closeDrawer} className="p-0 overflow-y-auto">
        <Card className="h-screen w-full max-w-[20rem] rounded-none p-0 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 bg-[#0397d3] text-white py-[10px] px-3 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <FaHome className="w-5 h-4"></FaHome>
              <p className="text-xl">Home</p>
            </div>
            <RxCross2 onClick={closeDrawer} className="w-6 h-6"></RxCross2>
          </div>
          <List className="overflow-y-auto">
            <Accordion
              open={openAccordian === 3}
              icon={
                <FaAngleDown
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 3}
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Electronics
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/electronics"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={category10} alt="" />
                      </ListItemPrefix>
                      All Electronics Products
                    </Link>
                  </ListItem>
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/refrigerators"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={refrigerator} alt="" />
                      </ListItemPrefix>
                      Refrigerators
                    </Link>
                  </ListItem>
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/televisions"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={category9} alt="" />
                      </ListItemPrefix>
                      Televisions
                    </Link>
                  </ListItem>
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/irons"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={iron} alt="" />
                      </ListItemPrefix>
                      Iron Machines
                    </Link>
                  </ListItem>
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/kettles"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={kettle} alt="" />
                      </ListItemPrefix>
                      Kettles
                    </Link>
                  </ListItem>
                  <ListItem ripple={false}>
                    <Link
                      to={"/electronics/airCollers"}
                      className=" flex items-center gap-1 w-full h-full"
                    >
                      <ListItemPrefix>
                        <img className="w-5 h-5" src={AC} alt="" />
                      </ListItemPrefix>
                      Air Collers
                    </Link>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 4}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 4 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 4}
              >
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Kids zone
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 5}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 5 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 5}
              >
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    কিডস জোন
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 6}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 6 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 6}
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    প্রাতিষ্ঠানিক অর্ডার
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 6}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 6 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 6}
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    অফার সমূহ
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 6}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 6 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 6}
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    কুইজ
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 6}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 6 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 6}
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    ব্লগ
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={openAccordian === 6}
              icon={
                <FaCalculator
                  className={`mx-auto h-4 w-4 transition-transform ${
                    openAccordian === 6 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem
                ripple={false}
                className="p-0"
                selected={openAccordian === 6}
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FaCalculator></FaCalculator>
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    গিফট ফাইন্ডার
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem ripple={false}>
                    <ListItemPrefix>
                      <FaCalculator></FaCalculator>
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
          </List>
        </Card>
      </Drawer>
      <Drawer
        placement="right"
        dismiss={{ "ancestorScroll?": true }}
        open={openRight}
        onClose={closeDrawerRight}
        className="p-0 w-[320px]"
      >
        <div className="mb-2 bg-[#0397d3] text-white py-[10px] px-3 flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <FaHome className="w-5 h-4"></FaHome>
            <p className="text-xl">Hasnat Hasan</p>
          </div>
          <RxCross2 onClick={closeDrawerRight} className="w-6 h-6"></RxCross2>
        </div>
        <div>
          <Link
            onClick={closeDrawerRight}
            className="block text-lg px-2 font-normal hover:text-blue-600 py-[5px]"
            to={"/my-section/profile"}
          >
            My Account
          </Link>
          {userData?.userRole === "admin" ? (
            <Link
              onClick={closeDrawerRight}
              className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
              to={"/admin-dashboard/"}
            >
              Admin Dashboard
            </Link>
          ) : (
            <>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myOrders"}
              >
                My Orders
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/downloadFreeBook"}
              >
                Download Free Book
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myEbook"}
              >
                My eBook Library
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myList"}
              >
                My List
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/bookShelf"}
              >
                My Book Shelf
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myWishlish"}
              >
                My Wishlist
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myRatingReviews"}
              >
                My Rating Reviews
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myPoints"}
              >
                My Points
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myFollowedAuthors"}
              >
                My Following Authors
              </Link>
              <Link
                onClick={closeDrawerRight}
                className="block text-lg px-2 font-normal hover:text-blue-600 py-3"
                to={"/myBkashAccount"}
              >
                My Bkash Account
              </Link>
            </>
          )}
          <span
            onClickCapture={closeDrawerRight}
            onClick={logout}
            className="block px-2 text-base font-normal hover:text-blue-600 py-2"
          >
            Sign Out
          </span>
        </div>
      </Drawer>
    </>
  );
};

export default NavTopBar;
