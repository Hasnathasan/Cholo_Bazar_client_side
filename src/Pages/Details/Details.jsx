import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Details.css";
import Rating from "react-rating";
import { FaTag } from "react-icons/fa";
import cartImg from "../../../public/cart-white.png";
import banner from "../../../public/details-page-banner.png";
import { BsExclamationCircle, BsHeart } from "react-icons/bs";
import DetailsForBooks from "./DetailsForBooks/DetailsForBooks";
import Reviews from "../../Components/Reviews/Reviews";
import Slider from "react-slick";
import { MdShare } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useUser from "../../Hooks/useUser";

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const Details = () => {
  const apiObj = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { apiPath, id } = apiObj;
  const { user } = useContext(AuthContext);
  const [userData, isUserDataLoading] = useUser()
  console.log(user);
  console.log(apiPath, id);
  const { data: product, isLoading: isProductLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/${apiPath}/${id}`);
      return res.data;
    },
  });
  console.log(product);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );
  if (isProductLoading) {
    console.log(isProductLoading);
    return <h1>Loading</h1>;
  }

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      {apiPath !== "books" ? (
        <div className="mx-auto max-w-[1160px] relative md:py-5">
          <div className="md:bg-white  hidden md:flex flex-col md:flex-row md:p-5 mb-5 gap-5 md:gap-10 md:shadow-lg">
            <div className="md:w-[400px]">
              <div ref={sliderRef} className="keen-slider w-full mb-7">
                {product?.images?.map((img, index) => (
                  <div
                    key={index}
                    className={`keen-slider__slide number-slide${
                      index + 1
                    } w-full h-[380px] p-3 border border-gray-300`}
                  >
                    <img className="w-full h-full" src={img} alt="" />
                  </div>
                ))}
              </div>

              <div ref={thumbnailRef} className="keen-slider thumbnail">
                {product?.images?.map((img, index) => (
                  <div
                    key={index}
                    className={`keen-slider__slide number-slide${
                      index + 1
                    } w-20 h-16`}
                  >
                    <img
                      src={img}
                      className="cursor-pointer w-full h-full"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 hidden md:block">
              <h1 className="text-xl text-gray-700">
                {specification?.title || specification?.Title}
              </h1>
              <div className="flex items-center gap-5 relative">
                <Rating
                  className="text-orange-400"
                  emptySymbol={<IoStarOutline></IoStarOutline>}
                  fullSymbol={<IoStarSharp></IoStarSharp>}
                  fractions={2}
                  initialRating={product?.rating}
                  readonly
                />
                <p className=" absolute -top-[3px] left-24">
                  {product?.number_of_ratings} ratings |{" "}
                  {product?.number_of_reviews} reviews
                </p>
              </div>
              <p className="text-gray-600">
                Brand:{" "}
                <span className="text-[#0397d6]">{specification?.brand}</span>
              </p>
              <p className="text-gray-600">
                Category:{" "}
                <span className="text-[#0397d6]">
                  {specification?.category || product?.secondary_category}
                </span>
              </p>
              <div className="flex gap-5 items-end">
                <h5 className="text-xl text-gray-400 font-semibold line-through">
                  TK. {price?.real_price}
                </h5>
                <h5 className="text-xl font-semibold text-gray-700">
                  TK. {price?.discounted_price}
                </h5>
                <p className="text-sm text-gray-600">
                  You save TK.{price?.real_price - price?.discounted_price} (
                  {parseInt(
                    ((price?.real_price - price?.discounted_price) /
                      price?.real_price) *
                      100
                  )}
                  %)
                </p>
              </div>
              <p className="text-green-500 text-sm flex items-center gap-2">
                <FaTag></FaTag>১০% অতিরিক্ত ছাড় ও নিশ্চিত ফ্রি শিপিং
                পশ্চিমবঙ্গের ৭৯৯+৳ বাংলা বই অর্ডারে।
              </p>
              <p className="text-green-500 text-sm flex items-center gap-2">
                <FaTag></FaTag>Unilever BD এর প্রতিটি পণ্যের সাথে নিশ্চিত ১টি
                35ml Rin liquid ফ্রি! এছাড়াও ২৯% পর্যন্ত ছাড়!
              </p>
              <div className="flex items-center gap-4">
                {apiPath === "book" ? (
                  <button className="px-8 py-3 border border-green-500 rounded-sm hover:bg-green-500 hover:text-white transition-all">
                    একটু পড়ে দেখুন
                  </button>
                ) : (
                  ""
                )}
                <button
                disabled={!user || userData?.userRole === "admin"}
                  onClick={handleAddToCart}
                  className="px-8 flex gap-2 text-lg font-semibold text-white justify-center items-center py-3 bg-amber-500 hover:bg-[#f59f0bd0] rounded duration-500  transition-all"
                >
                  {" "}
                  <img className="w-8" src={cartImg} alt="" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="md:hidden flex flex-col mb-5 gap-5">
            {/* Image silder for small devices */}
            <div className="bg-white py-12 relative">
              <Slider {...settings}>
                {product.images.map((img, index) => (
                  <div key={index}>
                    <img className="w-3/5 mx-auto" src={img} alt="" />
                  </div>
                ))}
              </Slider>
              <div className="flex flex-col gap-5 absolute top-1/4 right-7">
                <div className="bg-white p-3 w-min rounded-full shadow-circle">
                  <MdShare className="w-6 h-6 text-gray-500"></MdShare>
                </div>
                <div className="bg-white p-3 w-min rounded-full shadow-circle">
                  <BsHeart className="w-6 h-6 text-gray-500"></BsHeart>
                </div>
                <div className="bg-white p-3 w-min rounded-full shadow-circle">
                  <TiMessages className="w-6 h-6 text-gray-500"></TiMessages>
                </div>
              </div>
            </div>

            {/* Image slider end */}
            {/* About section for small devices */}

            <div className="bg-white p-5 mx-3 md:hidden text-center border-2 border-[#e9e9e9] md:border-none">
              <h1 className="text-lg text-gray-900">
                {specification?.title || specification?.Title}
              </h1>
              <p className="text-gray-700 text-[15px] mt-2">
                Brand:{" "}
                <span className="text-[#0397d6]">{specification?.brand}</span>
              </p>
              <hr className="my-2" />
              <p className="text-gray-700 text-[15px]">
                Category:{" "}
                <span className="text-[#0397d6]">
                  {specification?.category}
                </span>
              </p>
              <hr className="my-2" />
              <div className="flex gap-5 justify-center items-end">
                <h5 className="text-xl text-gray-600 font-semibold line-through">
                  TK. {price?.real_price}
                </h5>
                <h5 className="text-xl font-semibold text-gray-900">
                  TK. {price?.discounted_price}
                </h5>
              </div>
            </div>



            {/* About section end */}
          </div>
            <div className=" bg-amber-600 overflow-hidden fixed bottom-0 z-50 flex justify-center items-center h-12 w-full ">
                  <div>Hello There I am Hasnat</div>
                  <div className="rotate-45 bg-blue-500 basis-1/2 h-96">
                  </div>
                    <h2 className="absolute top-3 right-8">I am Hasnat</h2>
            </div>
          <img src={banner} alt="" />
          <div className="bg-white mx-3 md:mx-0 my-5 p-4 py-5 md:p-6 mb-5 gap-10 rounded-sm md:shadow-lg border-2 border-[#e9e9e9] md:border-none">
            <h1 className="text-xl text-gray-900 md:text-gray-700">
              Product Summary & Specification
            </h1>
            <h3 className="md:font-semibold font-medium text-gray-900 mt-3 mb-2 text-lg">
              Summary:
            </h3>
            <p className="text-[15px] text-gray-800 mb-5">
              {product?.specification?.summary || "N/A"}
            </p>
            <hr className="my-5" />
            <h3 className="md:font-semibold text-gray-900 mt-3 mb-2 text-lg">
              Specification:
            </h3>
            <div>
              {Object.entries(product?.specification).map(
                ([key, value], index) => (
                  <div key={index} className="flex mb-2 text-sm md:text-[15px]">
                    <p className="md:w-56 w-60 bg-[#f7f7f7]  text-gray-800 ps-2 md:ps-7 p-1">
                      {key}
                    </p>{" "}
                    <p
                      className={`bg-[#f0f0f0] ps-8 w-full  p-1 ${
                        key == "brand" ? "text-[#0397d6]" : "text-gray-800"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                )
              )}
            </div>
            <hr className="my-8" />
            <div className="flex gap-3 flex-wrap items-center">
              {product?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="py-[5px] px-3 border text-sm rounded-[4px] cursor-pointer text-slate-600 border-slate-200 bg-slate-50 hover:bg-[#7fc8ff] hover:text-white duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <hr className="my-7 hidden md:block" />
            <p className="text-red-600 hidden md:flex hover:text-cyan-700 duration-300  items-center w-max gap-1 mx-auto">
              {" "}
              <BsExclamationCircle className="rotate-180 w-6 h-6" /> Report
              incorrect information
            </p>
            <hr className="my-7 hidden md:block" />
            <div className="hidden md:block">
              <Reviews product={product}></Reviews>
            </div>
          </div>
          <div className="bg-white md:hidden p-4 my-5 mx-3 rounded-sm border-2 border-[#e9e9e9]">
            <p className="text-red-600 flex hover:text-cyan-700 duration-300  items-center w-max gap-1 mx-auto">
              {" "}
              <BsExclamationCircle className="rotate-180 w-6 h-6" /> Report
              incorrect information
            </p>
          </div>
          <div className="bg-white md:hidden p-4 mx-3 my-5 rounded-sm border-2 border-[#e9e9e9]">
            <Reviews product={product}></Reviews>
          </div>
        </div>
      ) : (
        <DetailsForBooks book={product} apiPath={apiPath}></DetailsForBooks>
      )}
    </>
  );
};

export default Details;
