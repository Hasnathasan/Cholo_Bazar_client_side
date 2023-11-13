import Slider from "react-slick";
import category1 from "../../../public/category-1.png";
import category2 from "../../../public/category-2.png";
import category3 from "../../../public/category-3.png";
import category4 from "../../../public/category-4.png";
import category5 from "../../../public/category-5.png";
import category6 from "../../../public/category-6.png";
import category7 from "../../../public/category-7.png";
import category8 from "../../../public/category-8.png";
import category9 from "../../../public/category-9.png";
import category10 from "../../../public/category-10.png";
import category11 from "../../../public/category-11.png";
import category12 from "../../../public/category-12.png";
import nextPre from "../../../public/next-pre.png";
import './CategorySlider.css'
const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        padding: "10px",
        width: "50px",
        height: "50px",
        zIndex: "10000",
        display: "flex",
        alignItems: "center",
        color: "black",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#ffffff",
        boxShadow: "5px 5px 44px #666666, -5px -5px 44px #ffffff",
      }}
      onClick={onClick}
    >
      <img className="w-6 h-6 absolute" src={nextPre} alt="" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        padding: "10px",
        width: "50px",
        height: "50px",
        zIndex: "10000",
        display: "flex",
        alignItems: "center",
        color: "black",
        justifyContent: "center",
        borderRadius: "50%",
        background: "#ffffff",
        boxShadow: "5px 5px 44px #666666, -5px -5px 44px #ffffff",
      }}
      onClick={onClick}
    >
      <img className="w-6 h-6 absolute rotate-180" src={nextPre} alt="" />
    </div>
  );
};

const CategorySlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    speed: 800,
    swipeToSlide: true,
    rows: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  const categories = [
    { cateImg: category1, cateName: "Testing Instrument" },
    { cateImg: category2, cateName: "Beauty" },
    { cateImg: category3, cateName: "Music Items" },
    { cateImg: category4, cateName: "Sports & Entertainment" },
    { cateImg: category5, cateName: "Kids zone" },
    { cateImg: category6, cateName: "Shoes & Accessories" },
    { cateImg: category7, cateName: "Furniture" },
    { cateImg: category8, cateName: "Personal Care" },
    { cateImg: category9, cateName: "Home Appliances" },
    { cateImg: category10, cateName: "Electrical Equipment" },
    { cateImg: category11, cateName: "Food & Bevarage" },
    { cateImg: category12, cateName: "Gifts & Crafts" },
    { cateImg: category7, cateName: "Furniture" },
    { cateImg: category8, cateName: "Personal Care" },
    { cateImg: category5, cateName: "Kids zone" },
    { cateImg: category9, cateName: "Home Appliances" },
  ];
  return (
    <div className="my-20 z-0 relative max-w-[1120px] mx-auto">
      <div className="layer z-10 pointer-events-none"></div>
      <Slider {...settings}>
        {categories.map(({ cateImg, cateName }, index) => (
          <div key={index} className="my-2 ">
           <div className="w-full h-full flex items-center justify-center">
           <div className="w-[140px] h-[140px] cursor-pointer p-4 border-3 grayscale hover:grayscale-0 border-gray-300 hover:border-blue-500 transition-all duration-200 rounded-full  flex flex-col gap-[5px] justify-center items-center">
              <img className="w-9 h-9" src={cateImg} alt="" />
              <h4 className="text-sm text-center">{cateName}</h4>
            </div>
           </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
