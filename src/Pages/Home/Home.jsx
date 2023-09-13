import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from "../Book/Book";
import './Home.css'
const Home = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [nestedTabIndex, setNestedTabIndex] = useState(0);
  return (
    <div className="mt-3">
      <Tabs
        selectedTabClassName="activeTab"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex flex-col md:flex-row justify-center bg-white gap-5 border-b border-sky-400">
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
            <TabPanel className=" max-w-[1120px] mx-auto"><Book></Book></TabPanel>
            <TabPanel></TabPanel>
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
      </Tabs>
    </div>
  );
};

export default Home;
