import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './FicNonFicCard.css'
import { Link } from "react-router-dom";
import { Card, Skeleton } from "@nextui-org/react";
const FicNonFicCard = ({ header, books, tags, apiPath }) => {
  if (!books) {
    return <Card className="space-y-3 h-[475px] mr-5">
    <Skeleton className="w-full h-full">
      <div className="h-full bg-default-400"></div>
      
    </Skeleton>
  </Card>;
  }
  return (
    <div className=" bg-[#8ccdf6] border-[6px] border-[#8ccdf6] rounded mr-5">
      <h2 className="bg-[#8ccdf6] text-2xl font-semibold text-gray-800 text-center py-1">
        {header}
      </h2>
      <div className="bg-white rounded">
        <Tabs selectedTabClassName="activetab">
          <TabList className="flex justify-center text-gray-700 font-semibold pt-3 text-[13px] gap-4 border-b border-gray-50">
            <Tab className="border w-20 py-1 flex justify-center items-center bg-gray-50 rounded-t">বই</Tab>
            <Tab className="border w-20 flex justify-center items-center bg-gray-50 rounded-t">লেখক</Tab>
          </TabList>
          <div className="bg-[#f5f3fa] py-[8px] w-full flex justify-center items-center">
          <select className=" py-2 rounded-2xl px-3 text-sm text-gray-500 w-[300px] focus:outline-none shadow-cyan-400">
          {
            tags?.map((tag, index) => <option key={index}>{tag}</option>)
          }
          </select>
          </div>
          <TabPanel className=" max-h-[267px] overflow-y-auto">
            {books.map((book) => (
              <Link key={book._id} to={`/details/${apiPath}/${book._id}`}>
                <div className="flex gap-2 h-20 items-center border-b py-[44px] border-b-gray-200 mx-6">
                <h1 className="text-2xl text-[#e68a00]">{books.indexOf(book) + 1} .</h1>
                <img className="w-[44px] h-[63px]" src={book.image} alt="" />
                <div className="flex flex-col justify-around gap-1">
                  <h3 className="text-[13px]">{book.title.slice(0, 25)}...</h3>
                  <h4 className=" text-xs text-gray-600">{book.author.name}</h4>
                  <div className="flex text-xs items-center gap-2">
                    <Rating
                    className="text-orange-400"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    fractions={2}
                    initialRating={book.rating}
                    readonly
                  />
                  <span className="text-gray-600">({book.number_of_reviews})</span>
                  </div>
                  
                </div>
              </div>
              </Link>
                
            ))}
          </TabPanel>
          <TabPanel className=" max-h-[267px] overflow-y-auto">
          {books.map((book) => (
                <div key={book._id} className="flex gap-2 h-16 items-center border-b py-[32px] border-b-gray-200 mx-6">
                <h1 className="text-2xl text-[#e68a00]">{books.indexOf(book) + 1} .</h1>
                <img className="w-[44px] rounded-full" src={book.author.image} alt="" />
                <h4 className=" text-sm text-gray-600">{book.author.name}</h4>
              </div>
            ))}
          </TabPanel>
        </Tabs>
        <div className="flex justify-center py-3 items-center">
          <button className="px-4 text-sm py-2 border border-cyan-400 hover:bg-cyan-500 text-sky-500 hover:text-white hover:border-sky-500 transition-all">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FicNonFicCard;
