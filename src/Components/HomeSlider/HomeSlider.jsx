import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from '../../../public/banner-1.png'
import banner2 from '../../../public/banner-2.png'
import banner3 from '../../../public/banner-3.png'
import banner4 from '../../../public/banner-4.png'
import banner5 from '../../../public/banner-5.png'
import banner6 from '../../../public/banner-6.png'
import banner7 from '../../../public/banner-7.png'
import banner8 from '../../../public/banner-8.png'
const HomeSlider = () => {
    const settings = {
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 700,
      autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };
    return (
        <div className="py-5">
            <Slider {...settings} className="h-[50%] mx-auto">
          <div>
            <img src={banner1} />
          </div>
          <div>
            <img src={banner2} />
          </div>
          <div>
            <img src={banner3} />
          </div>
          <div>
            <img src={banner4} />
          </div>
          <div>
            <img src={banner5} />
          </div>
          <div>
            <img src={banner6} />
          </div>
          <div>
            <img src={banner7} />
          </div>
          <div>
            <img src={banner8} />
          </div>
        </Slider>
        </div>
    );
};

export default HomeSlider;