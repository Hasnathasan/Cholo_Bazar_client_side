import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
import './Home.css'
import React from "react";

// import {
//   Collapse,
//   Typography,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
// } from "@material-tailwind/react";
import { FaArrowDown, FaArrowLeft, FaBars, FaHackerNews, FaMarkdown } from "react-icons/fa";




const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [nestedTabIndex, setNestedTabIndex] = useState(0);

  const navListMenuItems = [
    {
      title: "Products",
      description: "Find the perfect solution for your needs.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "About Us",
      description: "Meet and learn about our dedication",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Blog",
      description: "Find the perfect solution for your needs.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Services",
      description: "Learn how we can help you achieve your goals.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Support",
      description: "Reach out to us for assistance or inquiries",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Contact",
      description: "Find the perfect solution for your needs.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "News",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Products",
      description: "Find the perfect solution for your needs.",
      icon: <FaHackerNews></FaHackerNews>,
    },
    {
      title: "Special Offers",
      description: "Explore limited-time deals and bundles",
      icon: <FaHackerNews></FaHackerNews>,
    },
  ];

  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);


  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const renderItems = navListMenuItems.map(
  //   ({ icon, title, description }, key) => (
  //     <a href="#" key={key}>
  //       <MenuItem className="flex items-center gap-3 rounded-lg">
  //         <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
  //           {icon}
  //         </div>
  //         <div>
  //           <Typography
  //             variant="h6"
  //             color="blue-gray"
  //             className="flex items-center text-sm font-bold"
  //           >
  //             {title}
  //           </Typography>
  //           <Typography
  //             variant="paragraph"
  //             className="text-xs !font-medium text-blue-gray-500"
  //           >
  //             {description}
  //           </Typography>
  //         </div>
  //       </MenuItem>
  //     </a>
  //   ),
  // );
  return (
    <div>
      <div className="md:hidden">
      <Book></Book>
      </div>
      <div className="hidden md:block">
      {/* <Tabs
        selectedTabClassName="activeTab"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center bg-white gap-5 pt-1 border-b border-[#30bbfc]">
          <Tab>বই</Tab>
          <Tab>ইলেক্ট্রনিক্স</Tab>
          <Tab>মনিহারি পণ্য</Tab>
          <Tab>কিডস জোন</Tab>
          <Tab>গিফট ফাইন্ডার</Tab>
          <Tab>প্রাতিষ্ঠানিক অর্ডার</Tab>
          <Tab>অফার সমূহ</Tab>
          <Tab>কুইজ</Tab>
          <Tab>ব্লগ</Tab>
        </TabList>
        <TabPanel>
          <Tabs
            selectedTabClassName="selectedTabs"
            selectedIndex={nestedTabIndex}
            onSelect={(index) => setNestedTabIndex(index)}
          >
            <TabList className="flex flex-col pt-2 md:flex-row bg-white gap-8 justify-center border-0 nestedTabs border-b border-b-gray-300">
              <Tab>লেখক</Tab>
              <Tab>বিষয়</Tab>
              <Tab>প্রকাশনী</Tab>
              <Tab>ই-বুক</Tab>
              <Tab>Buy 1 Get 1 Offer</Tab>
              <Tab>স্টকের প্রোডাক্ট সমূহ</Tab>
              <Tab>লিডারবোর্ডের ২০০ বই</Tab>
              <Tab>বইমেলা ২০২৩</Tab>
            </TabList>
            <TabPanel className=" max-w-[1200px] mx-auto"><Book></Book></TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
            <TabPanel>Hello from Tab</TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <Tabs
            selectedTabClassName="selectedTabs"
            selectedIndex={nestedTabIndex}
            onSelect={(index) => setNestedTabIndex(index)}
          >
            <TabList className="flex justify-center border-0 nestedTabs">
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
 
      {/* <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="lg:block">
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <FaArrowDown className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}></FaArrowDown>
              <FaArrowDown className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}></FaArrowDown>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
        </div>
      </div>
    </Navbar> */}




    <div className="max-w-6xl mx-auto">
    <Book></Book>
    </div>
      </div>
    </div>
  );
};

export default Home;
