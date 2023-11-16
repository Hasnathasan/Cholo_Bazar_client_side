import img from "../../../public/fair.jpg";
import cart from "../../../public/cart.png";
import "./ProductCard.css";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div>
      <Link to="/">
        <article className="card relative flex flex-col items-center p-3.5 rounded-lg overflow-hidden bg-white !w-[240px]">
          <div className="card__img w-72 h-auto p-10 transition-all duration-500">
            <img src={img} alt="" />
          </div>
          <div className="card__name absolute top-0 left-[-25%] w-11 h-full rotate-180 flex justify-center items-center bg-blue-300 text-white font-bold transition-all duration-500">
            <p>Philips PerfectCare Elite</p>
          </div>
          <div className="card__precis w-full flex justify-between items-end transition-all duration-500">
            <a
              href=""
              className="card__icon text-3xl text-dark hover:text-blue-400"
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
            <a href="" className="card__icon">
              <img
                className="w-6 h-6 absolute bottom-3 z-30 right-3"
                src={cart}
                alt=""
              />
            </a>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default ProductCard;
