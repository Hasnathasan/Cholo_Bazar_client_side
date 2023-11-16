import img from "../../../public/fair.jpg";
import cart from "../../../public/cart.png";
import "./ProductCard.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card !w-[240px] relative p-3.5 overflow-hidden  delay-75 bg-white">
      <Link
        className="absolute top-0 bottom-0 left-0 right-0 z-10"
        to={"/"}
      ></Link>
      <article className=" flex flex-col items-center  ">
        <div className="card__img w-72 h-auto p-10 transition-all duration-500 delay-75">
          <img src={img} alt="" />
        </div>
        <div className="card__name absolute top-0 left-[-25%] w-11 h-full rotate-180 flex justify-center items-center bg-blue-300 text-white font-bold transition-all duration-500 delay-75">
          <p>Philips PerfectCare Elite</p>
        </div>
        <div className="card__precis w-full flex justify-center items-end transition-all duration-500 delay-75">
          <a
            href=""
            className="card__icon text-3xl text-dark absolute bottom-4 duration-300 delay-75 left-3 z-20 hover:text-blue-400"
          >
            <FaHeart></FaHeart>
          </a>
          <div>
            <span className="block text-center text-[12px] mt-[2px] text-red-400">
              $990.00
            </span>
            <span className="card__preci block text-center text-sm">
              $749.00
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
