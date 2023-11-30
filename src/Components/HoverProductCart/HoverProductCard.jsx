import "./HoverProductCard.css";

const HoverProductCard = ({ product }) => {
  console.log(product);
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
  return (
    <div className="w-[270px]">
      <div>
        <img src={images[0]} alt="" />
      </div>
    </div>
  );
};

export default HoverProductCard;
