import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HomeSlider.css'
import banner1 from '../../../public/banner-1.png'
import banner2 from '../../../public/banner-2.png'
import banner3 from '../../../public/banner-3.png'
import banner4 from '../../../public/banner-4.png'
import banner5 from '../../../public/banner-5.png'
import banner6 from '../../../public/banner-6.png'
import banner7 from '../../../public/banner-7.png'
import banner8 from '../../../public/banner-8.png'
import add1 from '../../../public/add1.png'
import add2 from '../../../public/add2.png'
import add3 from '../../../public/add3.png'
import { RiAlertFill } from "react-icons/ri";
const HomeSlider = () => {
    const settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 700,
      autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              fade: false,
              centerMode: true,
              centerPadding: "20px",
              speed: 400,
              autoplay: false,

            }
          }
        ]
      };
    return (
        <div className="py-5">
            <Slider {...settings} className="">
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full " src={banner1} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner2} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner3} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner4} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner5} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner6} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner7} />
          </div>
          <div>
            <img className="h-[160px] rounded-xl md:rounded-none p-2 md:p-0 md:h-full" src={banner8} />
          </div>
        </Slider>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-3 gap-4">
          <img src={add1} alt="" />
          <img src={add2} alt="" />
          <img src={add3} alt="" />
        </div>
        <p className="mt-7 gap-1 items-center text-gray-700 flex justify-center"><RiAlertFill className="text-amber-500 w-6 h-6"></RiAlertFill>  অর্ডারকৃত প্রোডাক্টে রিভিউ এবং রেটিং দিয়ে সংগ্রহ করুন ৫০ পয়েন্ট।</p>
        </div>
    );
};

export default HomeSlider;