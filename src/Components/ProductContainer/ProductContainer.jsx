import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";



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





const ProductContainer = ({data, headding, apiPath}) => {
  console.log(data);
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className=" mx-auto px-5 py-10  my-5 bg-white">
          <h2 className="text-lg font-bold text-gray-700 mb-3">{headding}</h2>
          <div className="hidden md:block">
            <Slider  {...settings}> 
          {
            data?.map(product => <ProductCard key={product._id} product={product} apiPath={apiPath}></ProductCard>)
          }
        </Slider>
          </div>
            
        <div className="grid grid-cols-2">
        {
            data?.map(product => <ProductCard key={product._id} product={product} apiPath={apiPath}></ProductCard>)
          }
        </div>
        </div>
    );
};

export default ProductContainer;