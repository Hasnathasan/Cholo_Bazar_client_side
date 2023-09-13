import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './Details.css'
import Rating from "react-rating";
import { FaRegStar, FaStar, FaTag } from "react-icons/fa";
import cartImg from '../../../public/cart-white.png'
import banner from '../../../public/details-page-banner.png'

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
  const { apiPath, id } = apiObj;
  console.log(apiPath, id);
  const { data: product, isLoading: isProductLoading } = useQuery({
    queryKey: [`product/${id}`],
    queryFn: async () => {
      const res = await fetch(
        `https://rokomari-clone-server.vercel.app/${apiPath}/${id}`
      );
      return res.json();
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
    return <h1>Loading</h1>;
  }
  const { specification, price } = product;
  return (
    <div className="mx-auto max-w-[1160px] py-20">
      <div className="bg-white flex flex-col md:flex-row p-5 mb-5 gap-10 shadow-lg"> 
        <div className="w-[400px]">
          <div ref={sliderRef} className="keen-slider w-full mb-7">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="keen-slider__slide number-slide1 w-full h-[380px] p-3 border border-gray-300"
              >
                <img className="w-full h-full" src={img} alt="" />
              </div>
            ))}
          </div>

          <div ref={thumbnailRef} className="keen-slider thumbnail">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="keen-slider__slide number-slide1 w-16 h-16 border border-gray-300"
              >
                <img src={img} className=" cursor-pointer w-full h-full" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
            <h1 className="text-xl text-gray-700">{specification?.title}</h1>
            <div className="flex items-center gap-5 relative">
            <Rating
                    className="text-orange-400"
                    emptySymbol={<FaRegStar></FaRegStar>}
                    fullSymbol={<FaStar></FaStar>}
                    fractions={2}
                    initialRating={product.rating}
                    readonly
            />
            <p className=" absolute -top-[3px] left-24">{product.rating} rating | {product.review} review</p>
            </div>
            <p className="text-gray-600">Brand: <span className="text-[#0397d6]">{specification.brand}</span></p>
            <p className="text-gray-600">Category: <span className="text-[#0397d6]">{specification.category[0]}</span></p>
            <div className="flex gap-5">
                <h5 className="text-xl text-gray-400 font-semibold line-through">TK. {price.real_price}</h5>
                <h5 className="text-xl font-semibold text-gray-700">TK. {price.discounted_price}</h5>
                <p className="text-sm text-gray-600">You save TK.{price.real_price - price.discounted_price}  ({parseInt(((price.real_price-price.discounted_price) / price.real_price ) * 100)}%)</p>
            </div>
            <p className="text-green-500 text-sm flex items-center gap-2"><FaTag></FaTag>১০% অতিরিক্ত ছাড় ও নিশ্চিত ফ্রি শিপিং পশ্চিমবঙ্গের ৭৯৯+৳ বাংলা বই অর্ডারে।</p>
            <p className="text-green-500 text-sm flex items-center gap-2"><FaTag></FaTag>Unilever BD এর প্রতিটি পণ্যের সাথে নিশ্চিত ১টি 35ml Rin liquid ফ্রি! এছাড়াও ২৯% পর্যন্ত ছাড়!</p>
            <div className="flex items-center gap-4">
              {
                apiPath === "book" ? <button className="px-8 py-3 border border-green-500 rounded-sm hover:bg-green-500 hover:text-white transition-all">একটু পড়ে দেখুন</button> : ""
              }
              <button className="px-8 flex gap-2 text-lg font-semibold text-white justify-center items-center py-3 bg-amber-500 hover:bg-[#f59f0bd0] rounded duration-500  transition-all"> <img className="w-8" src={cartImg} alt="" />Add to Cart</button>
            </div>
        </div>
      </div>
        <img src={banner} alt="" />
      <div className="bg-white my-5 p-6 mb-5 gap-10 shadow-lg">
      <h1 className="text-xl text-gray-700">Product Summary & Specification</h1>
      <h3 className="font-semibold text-[#333333] mt-3 mb-2 text-lg">Summary:</h3>
      <p className="text-[15px] text-gray-800 mb-5">{product.specification.summary || "N/A"}</p>
      <hr className="my-5" />
      <h3 className="font-semibold text-[#333333] mt-3 mb-2 text-lg">Specification:</h3>
      <div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Title:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.title}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Brand:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.brand}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Volumn:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.Volume?product.specification.Volume:product.specification.volume}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Age:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.age?product.specification.age:"N/A"}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Item Form:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.item_form || product.specification.category[0]}</p></div>
        <div className="flex mb-2"><p className="w-40 bg-[#f7f7f7] text-[15px] text-gray-800 ps-7 p-1">Made in:</p> <p className="bg-[#f0f0f0] text-[15px] ps-8 w-full text-gray-800 p-1">{product.specification.country_of_origin?product.specification.country_of_origin:"N/A"}</p></div>
        
      </div>
      </div>
    </div>
  );
};

export default Details;
