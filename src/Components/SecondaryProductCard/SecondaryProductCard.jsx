import { useContext, useState } from "react";
import "./SecondaryProductCard.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import cart from '../../../public/cart.png'
import { FaHeart } from "react-icons/fa";
import { IoFlashOff, IoStarOutline, IoStarSharp } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
const SecondaryProductCard = ({ product, apiPath }) => {
  const { user } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const {
    _id,
    images,
    price,
    rating,
    reviews,
    number_of_ratings,
    number_of_reviews,
    brand_info,
    tags,
    secondary_category,
    super_deal,
    main_category,
    specification,
  } = product;

  const handleAddToCart = () => {
    const cartProduct = {
      addedBy: user?.email || user?.phoneNumber,
      images,
      price,
      rating,
      reviews,
      number_of_ratings,
      number_of_reviews,
      brand_info,
      tags,
      quantity: 1,
      isSelected: false,
      secondary_category,
      super_deal,
      main_category,
      specification,
      mainId: _id,
      qunatity: 1,
    };
    axios
      .post("https://cholo-bazar.vercel.app/cart", cartProduct)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Successfully added to cart!",
            text: "Go to cart to Check Out",
            icon: "success",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative hidden md:block bg-white rounded overflow-hidden !duration-700 ms-1 text-center transition-all h-[310px] px-2 pt-5">
      <div
        
        className="md:flex flex-col h-full justify-between justify-items-end "
      >
        <img className="h-[172px] bg-white rounded-md" src={images[0]} alt="" />
        <div className=" p-2 space-y-1">
          <h3 className="text-[13px]">
            {specification?.title || specification?.Title.split(" ").slice(0, 4).join(" ")}
          </h3>
          <h4 className="text-sm text-gray-500">{specification?.Brand || specification?.brand}</h4>
          <div className="flex justify-around items-end">
            <h4 className="text-[15px] text-gray-700 line-through">
              ৳{price?.real_price}
            </h4>
            <h4 className=" font-semibold">৳{price?.discounted_price}</h4>
            <h4 className="text-red-500 text-sm">
              {parseInt(
                ((price?.real_price - price?.discounted_price) /
                  price?.real_price) *
                  100
              )}
              % OFF
            </h4>
          </div>
          </div>
            
        </div>
        <div className={`flex justify-center z-10 items-center relative ${hover ? "bottom-40" : "-bottom-32"} duration-700   gap-3`}>
            <div onClick={handleAddToCart} className={`w-10 cursor-pointer h-10 flex justify-center items-center relative ${hover ? "bottom-0" : "-bottom-32"} transition-all !duration-400 bg-white  rounded-full shadow-md`}>
              <img className="w-[60%]" src={cart} alt="" />
            </div>
            <div className={`w-10 h-10 flex justify-center items-center relative ${hover ? "bottom-0" : "-bottom-32"} transition-all !duration-[700ms] bg-white  rounded-full shadow-md`}>
              <FaHeart className="w-[60%]"></FaHeart>
            </div>
            <div className={`w-10 h-10 flex justify-center items-center relative ${hover ? "bottom-0" : "-bottom-32"} transition-all !duration-[1200ms] bg-white rounded-full shadow-md`}>
              <IoFlashOff></IoFlashOff>
            </div>
            </div>
            <div className={`bg-gray-800 opacity-60 absolute top-0  left-0 right-0 ${hover ? " bottom-0" : "bottom-[340px]"} !duration-500 `}></div>
      </div>

      {/* Component for small device */}
      <div className="md:hidden min-h-[265px] relative">
        <Link to={`/details/${apiPath}/${_id}`}>
          <div className="flex flex-col justify-between text-center pt-3">
            <img className="!h-[130px] w-3/4 mx-auto" src={images[0]} alt="" />
            <div className=" p-2 space-y-1 absolute bottom-0">
              <h3 className="text-sm">{specification.title?.split(" ").slice(0, 4).join(" ") || specification?.Title.split(" ").slice(0, 4).join(" ") }...</h3>
              <h4 className="text-sm text-gray-600">{specification.brand}</h4>
              <div className="flex items-center gap-1 text-sm justify-center">
                <Rating
                  className="text-orange-400"
                  emptySymbol={<IoStarOutline></IoStarOutline>}
                  fullSymbol={<IoStarSharp></IoStarSharp>}
                  fractions={2}
                  initialRating={product.rating}
                  readonly
                />
                <p className="">({product?.number_of_ratings || 0})</p>
              </div>
              <div className="flex justify-center gap-2 items-end">
                <h4 className="text-gray-600 font-semibold line-through">
                  TK.{price.real_price}
                </h4>
                <h4 className="text-[#2b2b2b] font-semibold">
                  TK.{price.discounted_price}
                </h4>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SecondaryProductCard;
