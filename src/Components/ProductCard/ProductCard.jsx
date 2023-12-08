import Rating from "react-rating";
import cart from "../../../public/cart.png";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Chip } from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useUser from "../../Hooks/useUser";

const ProductCard = ({ product, apiPath, width }) => {
  const { user } = useContext(AuthContext);
  const [userData, isUserDataLoading] = useUser();
  console.log(product);
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
    <div className={`card w-[184px] sm:w-[240px] mx-auto md:[250px] ${width ? `xl:w-[260px]` : 'xl:w-[230px]'} min-h-[260px] md:min-h-[320px] relative p-3.5 overflow-hidden !rounded hover:shadow-lg hover:shadow-gray-300 !transition-all !duration-300  delay-75 bg-white`}>
      <Link
        className="absolute top-0 bottom-0 left-0 right-0 z-10"
        to={`/details/${apiPath}/${ product?.mainId || _id}`}
      ></Link>
      <article className=" flex flex-col h-full items-center justify-between  ">
        <div className="card__img w-[120%] h-auto p-6 transition-all duration-500 delay-75">
          <img className="w-full max-h-[205px] h-full" src={images[0]} alt="" />
        </div>
        <h3 className="card__name text-sm md:text-base absolute top-0 left-[-25%] w-7 md:w-10 h-full rotate-180 flex justify-center items-center bg-blue-300 text-white font-semibold transition-all duration-500 delay-75">
          {specification?.title?.split(" ").slice(0, 3).join(" ") ||
            specification?.Title?.split(" ").slice(0, 3).join(" ")}
        </h3>

        <div className="card__precis w-full h-auto mt-auto flex flex-col justify-end items-center transition-all duration-500 delay-75">
          <div className="">
            <span className="block text-center text-[12px] line-through mt-[2px] text-red-400">
              ৳{price?.real_price}
            </span>
            <span className="card__preci block text-center font-semibold text-sm">
              ৳{price?.discounted_price}
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <Rating
              className="text-orange-400"
              emptySymbol={<IoStarOutline className="w-3 h-3"></IoStarOutline>}
              fullSymbol={<IoStarSharp className="w-3 h-3"></IoStarSharp>}
              fractions={2}
              initialRating={product?.rating}
              readonly
            />
            <p className="text-xs text-blue-gray-500">({product?.rating})</p>
          </div>
          {
            product?.quantity ? <Chip
            className="absolute top-3 right-4 text-xs"
            color="danger"
            variant="faded"
          >
            Quantity: {product?.quantity}
          </Chip>: <Chip
            className="absolute top-3 right-4 text-xs"
            color="danger"
            variant="faded"
          >
            {parseInt(
              ((price?.real_price - price?.discounted_price) /
                price?.real_price) *
                100
            )}
            % off
          </Chip>
          }
          <span
            className="card__icon text-3xl text-dark cursor-pointer absolute bottom-4 duration-300 delay-75 left-3 z-20 hover:text-blue-400"
          >
            <FaHeart className="w-6 h-6"></FaHeart>
          </span>

          <button
          disabled={!user || userData?.userRole === "admin"}
            onClick={handleAddToCart}
            className="card__icon_2 absolute bottom-5 cursor-pointer right-4 z-20 transition-all !duration-100 !delay-75"
          >
            <img className="w-6 h-6" src={cart} alt="" />
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
