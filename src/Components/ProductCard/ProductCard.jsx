
import cart from "../../../public/cart.png";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({product, apiPath}) => {
    const {_id, specification, images, price} = product;
  return (
    <div className="card !w-[180px] md:!w-[240px] min-h-[320px] relative p-3.5 overflow-hidden !rounded hover:shadow-lg hover:shadow-gray-300 !transition-all !duration-300  delay-75 bg-white">
    <Link
      className="absolute top-0 bottom-0 left-0 right-0 z-10"
      to={`/details/${apiPath}/${_id}`}
    ></Link>
    <article className=" flex flex-col items-center justify-between  ">
      <div className="card__img w-[120%] h-auto p-6 transition-all duration-500 delay-75">
        <img className="w-full max-h-[205px] h-full" src={images[0]} alt="" />
      </div>
      <div className="card__name absolute top-0 left-[-25%] w-11 h-full rotate-180 flex justify-center items-center bg-blue-300 text-white font-semibold transition-all duration-500 delay-75">
        <p>{specification?.title?.split(" ").slice(0, 3).join(" ") || specification?.Title?.split(" ").slice(0, 3).join(" ")}</p>
      </div>
      <div className="card__precis w-full mt-auto flex justify-center items-end transition-all duration-500 delay-75">
        <a
          href=""
          className="card__icon text-3xl text-dark absolute bottom-4 duration-300 delay-75 left-3 z-20 hover:text-blue-400"
        >
          <FaHeart></FaHeart>
        </a>
        <div className="">
          <span className="block text-center text-[12px] mt-[2px] text-red-400">
          ৳{price?.real_price}
          </span>
          <span className="card__preci block text-center text-sm">
          ৳{price?.discounted_price}
          </span>
        </div>
        <a
          href="www.google.com"
          className="card__icon_2 absolute bottom-4 right-4 z-20 transition-all !duration-100 !delay-75"
        >
          <img className="w-8 h-8" src={cart} alt="" />
        </a>
      </div>
    </article>
  </div>
  );
};

export default ProductCard;
