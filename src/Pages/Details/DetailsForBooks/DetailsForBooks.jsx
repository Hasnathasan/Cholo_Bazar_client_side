import { FaRegStar, FaStar, FaTag } from "react-icons/fa";
import Rating from "react-rating";
import cartImg from '../../../../public/cart-white.png'
import tick from '../../../../public/tick.png'
import { BsExclamationCircle, BsPeople } from "react-icons/bs";


const DetailsForBooks = ({book, apiPath}) => {
    const {image, title, price, reviews, ratings, number_of_ratings, main_category, language, category, stock, buyers, country, edition, author, book_summary} = book;
    return (
        <div className="mx-auto max-w-[1160px] py-20">
      <div className="bg-white flex flex-col md:flex-row p-5 mb-5 gap-10 shadow-lg"> 
        <div className="w-[340px]">
          <div className="w-full p-10 border border-slate-200">
          <img src={image} alt="" />
          </div>
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
                    initialRating={ratings}
                    readonly
            />
            <p className=" absolute text-slate-800 -top-[3px] left-24">{ratings} rating | {reviews} review</p>
            </div>
            <p className="flex items-center gap-2 text-slate-700"><BsPeople></BsPeople> <span className="flex gap-1 items-center">{buyers} people want this <BsExclamationCircle className="rotate-180"></BsExclamationCircle></span></p>
            {/* <p className="text-gray-600">Brand: <span className="text-[#0397d6]">{specification?.brand}</span></p>
            <p className="text-gray-600">Category: <span className="text-[#0397d6]">{specification?.category[0]}</span></p> */}
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
              <button className="px-8 flex gap-2 text-lg font-semibold text-white justify-center items-center py-3 bg-amber-500 hover:bg-[#f59f0bd0] rounded duration-500  transition-all"> <img className="w-8" src={cartImg} alt="" />Add to Cart</button>
            </div>
        </div>
      </div>
        {/* <img src={banner} alt="" />
      <div className="bg-white my-5 p-6 mb-5 gap-10 shadow-lg">
      <h1 className="text-xl text-gray-700">Product Summary & Specification</h1>
      <h3 className="font-semibold text-[#333333] mt-3 mb-2 text-lg">Summary:</h3>
      <p className="text-[15px] text-gray-800 mb-5">{product?.specification?.summary || "N/A"}</p>
      <hr className="my-5" />
      <h3 className="font-semibold text-[#333333] mt-3 mb-2 text-lg">Specification:</h3>
      <div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Title:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.title}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Brand:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.brand}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Volumn:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.Volume?product.specification?.Volume:product.specification?.volume}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Age:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.age?product.specification?.age:"N/A"}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Item Form:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.item_form || product.specification?.category[0]}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Made in:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification?.country_of_origin?product.specification?.country_of_origin:"N/A"}</p></div>
        
      </div>
      <hr className="my-8" />
      <div className="flex gap-3 items-center">
        {
          product?.tags?.map((tag, index) => <span key={index} className="py-[5px] px-3 border text-sm rounded-[4px] cursor-pointer text-slate-600 border-slate-200 bg-slate-50 hover:bg-[#7fc8ff] hover:text-white duration-300" >{tag}</span>)
        }
      </div>
      <hr className="my-8" />
      <p className="text-red-600 hover:text-cyan-700 duration-300 flex items-center w-max gap-1 mx-auto"> <BsExclamationCircle className="rotate-180 w-6 h-6" /> Report incorrect information</p>
      </div> */}
    </div>
    );
};

export default DetailsForBooks;