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
import axios from "axios";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const CartProductCard = ({ product }) => {
  const {selectedCart, setSelectedCart} = useContext(AuthContext);
  const [, , refetch] = useCart()
  const [isSelected, setIsSelected] = useState(selectedCart.includes(product));
  const [quantity, setQuantity] = useState(product?.quantity);
  useEffect( () => {
    if(isSelected){
      setSelectedCart([...selectedCart, product])
    }
    else{
      const selectedCartWithoutThisProduct = selectedCart.filter(item => product !== item)
      setSelectedCart(selectedCartWithoutThisProduct)
    }
  },[isSelected, product, setSelectedCart])

  useEffect( () => {
    axios.patch(`https://summer-camp-server-black.vercel.app/updateCartProduct/${product?._id}?quantity=${quantity}`)
    .then(res => {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[product?._id, quantity])

  console.log(product);
  const handleDeleteProductFromCart = () => {
    axios.delete(`https://summer-camp-server-black.vercel.app/cart/${product?._id}`)
    .then(res => {
      if(res.data.deletedCount){
        refetch()
        Swal.fire({
          title: "Successfully deleted from cart!",
          // text: "Go to cart to Check Out",
          icon: "success"
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const {price} = product;
  return (
    <div className="w-[100%] bg-white rounded-2xl shadow-xl relative p-6">
      <div className="flex justify-start items-center gap-4 absolute top-3 right-3">
      <button onClick={handleDeleteProductFromCart}><img className="w-6 h-6" src={del} alt="" /></button>
      {" "}
      <Checkbox isSelected={selectedCart.includes(product)} onValueChange={() => setIsSelected(!isSelected)} ></Checkbox>
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
