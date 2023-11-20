import { FaAngleDown, FaRegStar, FaStar, FaTag } from "react-icons/fa";
import Rating from "react-rating";
import cartImg from '../../../../public/cart-white.png';
import tick from '../../../../public/tick.png';
import { BsExclamationCircle, BsPeople } from "react-icons/bs";
import banner from '../../../../public/details-page-banner.png';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import './DetailsForBooks.css'
import Reviews from "../../../Components/Reviews/Reviews";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const DetailsForBooks = ({book, apiPath}) => {
  const {user} = useContext(AuthContext)
  console.log(book);
    const { _id, image, title, tags, price, reviews, rating, number_of_pages, number_of_reviews, number_of_ratings, main_category, language, publisher, category, stock, buyers, country, edition, author, isbn, book_summary, translator} = book;
    const handleAddToCart = () => {
      const cartProduct = { addedBy: user?.email || user?.phoneNumber, image, price, rating, reviews, number_of_ratings, number_of_reviews, author, tags, quantity: 1, isSelected: false, main_category, mainId: _id, qunatity: 1};
      axios.post('https://cholo-bazar.vercel.app/cart', cartProduct)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            title: "Successfully added to cart!",
            text: "Go to cart to Check Out",
            icon: "success"
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    return (
        <div className="mx-auto max-w-[1160px] py-20">
      <div className="bg-white flex flex-col md:flex-row p-5 mb-5 gap-10 shadow-lg"> 
        <div className="w-[340px]">
          <div className="w-full p-10 border border-slate-200">
          <img src={image} alt="" />
          </div>
          <div className="flex gap-[1px] my-5 justify-center"><button className="py-2 px-8 bg-[#2084ff] hover:bg-[#2084ffb4] duration-200 text-white font-semibold text-[15px] rounded-l-sm">Want to read</button> <button className="p-2 bg-[#2084ff] hover:bg-[#2084ffb4] duration-200 text-white font-semibold rounded-r-sm"><FaAngleDown></FaAngleDown></button></div>
        </div>
        <div className="space-y-4">
            <h1 className="text-xl text-gray-700">{title}</h1>
            <p className="text-[15px] text-gray-600">by <span className="text-[#0397d6]">{author?.name}</span></p>
            <p className="text-sm text-gray-800 font-[600]">Category: <span className="text-[#0397d6] font-normal">{category}</span></p>
            
            <div className="flex items-center gap-5 relative">
            <Rating
                    className="text-orange-400"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    fractions={2}
                    initialRating={rating}
                    readonly
            />
            <p className=" absolute text-slate-800 -top-[3px] left-24">{rating} rating | {number_of_reviews} review</p>
            </div>
            <p className="flex items-center gap-2 text-slate-700"><BsPeople></BsPeople> <span className="flex gap-1 items-center">{buyers || 0} people want this <BsExclamationCircle className="rotate-180"></BsExclamationCircle></span></p>
            
            <div className="flex gap-5 items-end">
                <h5 className="text-xl text-gray-400 font-semibold line-through">TK. {price.real_price}</h5>
                <h5 className="text-xl font-semibold text-gray-700">TK. {price.discount}</h5>
                <p className="text-sm text-gray-600">You save TK.{price.real_price - price.discount}  ({parseInt(((price.real_price-price.discount) / price.real_price ) * 100)}%)</p>
            </div>
            <p className="text-green-500 text-sm flex items-center gap-2"><FaTag></FaTag>১০% অতিরিক্ত ছাড় ও নিশ্চিত ফ্রি শিপিং পশ্চিমবঙ্গের ৭৯৯+৳ বাংলা বই অর্ডারে।</p>
            <p className="text-green-500 text-sm flex items-center gap-2"><FaTag></FaTag>Unilever BD এর প্রতিটি পণ্যের সাথে নিশ্চিত ১টি 35ml Rin liquid ফ্রি! এছাড়াও ২৯% পর্যন্ত ছাড়!</p>
            <p className="text-[15px] flex items-center gap-2"><img src={tick} alt="" /> InStocks ({stock}+ copies available)</p>
            <div className="flex items-center gap-4">
              {
                apiPath.includes("books") ? <button className="px-8 py-3 border border-green-500 rounded-sm hover:bg-green-500 hover:text-white transition-all">একটু পড়ে দেখুন</button> : ""
              }
              <button onClick={handleAddToCart} className="px-8 flex gap-2 text-lg font-semibold text-white justify-center items-center py-3 bg-amber-500 hover:bg-[#f59f0bd0] rounded duration-500  transition-all"> <img className="w-8" src={cartImg} alt="" />Add to Cart</button>
            </div>
        </div>
      </div>
        <img src={banner} alt="" />
      <div className="bg-white my-5 p-6 mb-5 gap-10 shadow-lg">
      <h1 className="text-xl text-gray-700">Product Summary & Specification</h1>
          <Tabs selectedTabClassName="activeetab">
            <TabList className="border-b border-gray-400">
              <Tab>Summary</Tab>
              <Tab>Specification</Tab>
              <Tab>Author</Tab>
            </TabList>
            <TabPanel>
      <h3 className="text-[#333333d8] mt-4 mb-2 text-[15px]">{book_summary}</h3>
            </TabPanel>
            <TabPanel>
              <table className="w-full mt-6">
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Title:</td> <td className="border w-[85%] border-gray-300 text-[15px] ps-8 text-gray-800">{title}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Author:</td> <td className="border border-gray-300 text-[15px] ps-8 text-sky-500">{author?.name}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Publisher:</td> <td className="border border-gray-300 text-[15px] ps-8  text-sky-500">{publisher || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Publisher:</td> <td className="border border-gray-300 text-[15px] ps-8  text-sky-500">{translator || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">ISBN:</td> <td className="border border-gray-300 text-[15px] ps-8  text-gray-800">{isbn || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Edition:</td> <td className="border border-gray-300 text-[15px] ps-8  text-gray-800">{edition || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Number of Pages:</td> <td className="border border-gray-300 text-[15px] ps-8  text-gray-800">{number_of_pages || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">Country:</td> <td className="border border-gray-300 text-[15px] ps-8 text-gray-800">{country || "N/A"}</td></tr>
        <tr><td className="border border-gray-300 bg-[#f1f2f4] text-[15px] text-[#333333] ps-7 p-[10px]">language:</td> <td className="border border-gray-300 text-[15px] ps-8 text-gray-800">{language || "N/A"}</td></tr>
        
      </table>
            </TabPanel>
            <TabPanel>
              <div className="flex mt-7 justify-center px-12 gap-5">
                <div className="flex basis-[15%] flex-col items-center gap-1 ">
                  <img className="rounded-full " src={author?.image} alt="" />
                  <h3 className="text-[15px] text-gray-600"><span className="font-semibold">{author?.follower}</span> followers</h3>
                  <button className="py-1 px-6 bg-[#0397d3] text-white font-semibold text-sm rounded-l-sm">Follow</button>
                </div>
                <div className="basis-[85%]">
                  <h1 className=" text-2xl text-gray-800">{author?.name}</h1>
                  <h3 className="text-gray-600">{author?.introduction}</h3>
                </div>
              </div>
            </TabPanel>
          </Tabs>
          <hr className="my-8" />
      <div className="flex gap-3 items-cente flex-wrap">
        {
          tags?.map((tag, index) => <span key={index} className="py-[5px] px-3 border text-sm rounded-[4px] cursor-pointer text-slate-600 border-slate-200 bg-slate-50 hover:bg-[#7fc8ff] hover:text-white duration-300" >{tag}</span>)
        }
      </div>
      <hr className="my-7" />
      <p className="text-red-600 hover:text-cyan-700 text-[15px] duration-300 flex items-center w-max gap-1 mx-auto"> <BsExclamationCircle className="rotate-180 w-6 h-6" /> Report incorrect information</p>
      <hr className="my-7" />
      <Reviews product={book}></Reviews>
      </div>
    </div>
    );
};

export default DetailsForBooks;