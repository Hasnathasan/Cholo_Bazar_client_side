import { Typography } from "@material-tailwind/react";
import { Button, ButtonGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import plus from '../../../public/plus.png';
import minus from '../../../public/minus.png';
import del from '../../../public/delete.png';
import Rating from "react-rating";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";


const CartProductCard = ({ product }) => {
  const {selectedCart, setSelectedCart} = useContext(AuthContext);
  const [isSelected, setIsSelected] = useState(selectedCart.includes(product));
  useEffect( () => {
    if(isSelected){
      setSelectedCart([...selectedCart, product])
    }
    else{
      const selectedCartWithoutThisProduct = selectedCart.filter(item => product !== item)
      setSelectedCart(selectedCartWithoutThisProduct)
    }
  },[isSelected, product, setSelectedCart])

  console.log(selectedCart, isSelected);
  const [quantity, setQuantity] = useState(1);
  const {price} = product;
  return (
    <div className="w-[100%] bg-white rounded-2xl shadow-xl relative p-6">
      <div className="flex justify-center items-center gap-1 absolute top-3 right-3">
      <Checkbox isSelected={selectedCart.includes(product)} onValueChange={() => setIsSelected(!isSelected)} ></Checkbox>
     <img className="w-6 h-6" src={del} alt="" />
      </div>
      <div className="flex gap-6">
        <img
          className="w-40 h-40 rounded-xl bg-gray-200"
          src={product?.images[0]}
          alt=""
        />
        <div className="space-y-1">
          <Typography variant="h5" className="text-gray-900">
            {product?.specification?.Title}
          </Typography>
          <Typography variant="paragraph">
            Brand: <span className="text-blue-500">{product?.specification?.Brand}</span>
          </Typography>
         <div className="flex items-center gap-2">
         <Rating
                  className="text-orange-400"
                  emptySymbol={<IoStarOutline></IoStarOutline>}
                  fullSymbol={<IoStarSharp></IoStarSharp>}
                  fractions={2}
                  initialRating={product?.rating}
                  readonly
          />
          <p className="text-sm">({product?.rating})</p>
         </div>
          <div className="flex gap-5 items-center">
                <h5 className="text-base text-red-400 font-semibold line-through">
                  TK. {price?.real_price}
                </h5>
                <h5 className="text-lg font-semibold text-gray-800">
                  TK. {price?.discounted_price}
                </h5>
                <p className="text-sm text-gray-600">
                  You save TK. {parseInt(price?.real_price - price?.discounted_price)} (
                  {parseInt(
                    ((price?.real_price - price?.discounted_price) /
                      price?.real_price) *
                      100
                  )}
                  %)
                </p>
              </div>
          <ButtonGroup className="float-right absolute bottom-7 right-7" radius="lg" color="primary" variant="flat">
            <Button isIconOnly  onClick={() => setQuantity(quantity !== 1 ? (quantity - 1): 1)}><img className="w-4" src={minus} /></Button>
            <Button isIconOnly className="!w-5">{quantity}</Button>
            <Button isIconOnly  onClick={() => setQuantity(quantity + 1)}><img className="w-4" src={plus} /></Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
