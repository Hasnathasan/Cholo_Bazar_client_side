import "./HoverProductCard.css";

const HoverProductCard = ({ product }) => {
  console.log(product);
  const { images } = product;
  return (
    <div className="w-[270px]">
      <div>
        <img src={images[0]} alt="" />
      </div>
    </div>
  );
};

export default HoverProductCard;
