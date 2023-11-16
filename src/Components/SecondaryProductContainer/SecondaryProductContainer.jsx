import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SecondaryProductCard from "../SecondaryProductCard/SecondaryProductCard";



const SampleNextArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#1db7ff", padding: "10px", boxShadow: "-6px 0px 14px 1px #4fc7ffb9", borderRadius: "2px", width: "40px", height: "80px", zIndex: "10", display: "flex", alignItems: "center", color: "black" }}
      onClick={onClick}
    />
  );
}

const  SamplePrevArrow = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#1db7ff", padding: "10px", boxShadow: "6px 0px 14px 1px #4fc7ffb9", borderRadius: "2px", width: "40px", height: "80px", zIndex: "10", display: "flex", alignItems: "center", color: "black" }}
      onClick={onClick}
    />
  );
}





const SecondaryProductContainer = ({data, headding, apiPath, slidesToShow}) => {
  console.log(data);
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow || 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className=" md:mx-auto px-2 py-6 md:px-5 md:py-10 border-2 border-[#e9e9e9] shadow-sm md:border-none my-5 bg-white rounded-[4px] md:rounded-none mx-3 ">
          <h2 className="text-xl ps-4 font-bold text-gray-800 mb-3">{headding}</h2>
          <div className="hidden md:block">
            <Slider  {...settings}> 
          {
            data?.map(product => <SecondaryProductCard key={product._id} product={product} apiPath={apiPath}></SecondaryProductCard>)
          }
        </Slider>
          </div>
            
        <div className="md:hidden">
        <div className="grid gap-y-4 gap-x-[5px] grid-cols-2">
        {
            data?.map(product => <SecondaryProductCard key={product._id} product={product} apiPath={apiPath}></SecondaryProductCard>)
          }
        </div>
        <div className="flex justify-center py-3 items-center">
          <button className="px-6 py-2 border font-bold text-blue-500 border-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-500 transition-all">
            View All
          </button>
        </div>
        </div>
        </div>
    );
};

export default SecondaryProductContainer;