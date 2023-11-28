import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./HomeSlider.css";
import banner1 from "../../../public/banner-1.png";
import banner2 from "../../../public/banner-2.png";
import banner3 from "../../../public/banner-3.png";
import banner4 from "../../../public/banner-4.png";
import banner5 from "../../../public/banner-5.png";
import banner6 from "../../../public/banner-6.png";
import banner7 from "../../../public/banner-7.png";
import banner8 from "../../../public/banner-8.png";
import banner9 from "../../../public/banner-9.png";
import banner10 from "../../../public/banner-10.png";
import banner11 from "../../../public/banner-11.png";
import banner12 from "../../../public/banner-12.png";
import banner13 from "../../../public/banner-13.png";
import add1 from "../../../public/add1.png";
import add2 from "../../../public/add2.png";
import add3 from "../../../public/add3.png";
const HomeSlider = () => {
  const sliderImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
  ];
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 700,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          fade: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="py-5 mx-2 md:mx-0">
      <Slider {...settings} className="">
        {sliderImages.map((img, index) => (
          <div key={index}>
            <img
              className="h-[150px] rounded-[10px] md:rounded-none p-[5px] md:p-0 md:h-[225px] w-full"
              src={img}
            />
          </div>
        ))}
      </Slider>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-4">
        <img src={add1} alt="" />
        <img src={add2} alt="" />
        <img
          className="col-span-2 mx-auto md:w-full md:col-span-1"
          src={add3}
          alt=""
        />
      </div>
      {/* <p className="mt-7 gap-1 items-start md:items-center text-sm md:text-base text-gray-700 flex justify-center"><RiAlertFill className="text-amber-500 w-6 h-6"></RiAlertFill>  অর্ডারকৃত প্রোডাক্টে রিভিউ এবং রেটিং দিয়ে সংগ্রহ করুন ৫০ পয়েন্ট।</p> */}
    </div>
  );
};

export default HomeSlider;
