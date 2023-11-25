import { Typography } from "@material-tailwind/react";
import { Button, ButtonGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import plus from "../../../public/plus.png";
import minus from "../../../public/minus.png";
import del from "../../../public/delete.png";
import Rating from "react-rating";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const CartProductCard = ({ product }) => {
  const [, , refetch] = useCart();

  const [isSelected, setIsSelected] = useState(
    product ? product.isSelected : false
  );
  const [quantity, setQuantity] = useState(product ? product.quantity : 1);

  useEffect(() => {
    if (product) {
      axios
        .patch(
          `https://cholo-bazar.vercel.app/updateCartProduct/${product._id}?isSelected=${isSelected}&quantity=${quantity}`
        )
        .then((res) => {
          console.log(res);
          refetch();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isSelected, product, quantity, refetch]);

  const handleDeleteProductFromCart = () => {
    if (product) {
      axios
        .delete(`https://cholo-bazar.vercel.app/cart/${product._id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Successfully deleted from cart!",
              icon: "success",
            });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const { price } = product;
  return (
    <div className="w-[100%] bg-white rounded-2xl shadow-xl relative p-5">
      <div className="flex justify-start items-center gap-4 absolute top-3 right-3">
        <button onClick={handleDeleteProductFromCart}>
          <img className="w-6 h-6" src={del} alt="" />
        </button>{" "}
        <Checkbox
          isSelected={isSelected}
          onValueChange={() => setIsSelected(!isSelected)}
        ></Checkbox>
      </div>
      <div className="flex w-full flex-col sm:flex-row gap-4">
        <img
          className="w-40 h-40 rounded-xl bg-gray-200"
          src={product?.images ? product?.images[0] : product?.image}
          alt=""
        />
        <div className="space-y-1 mt-2 w-full">
          {/* <Typography variant="h5" className="text-gray-900">
            {product?.specification ? product?.specification?.Title : product?.title}
          </Typography> */}
          <h2 className="md:text-[19px] text-gray-900 font-semibold">
            {product?.specification
              ? product?.specification?.Title
              : product?.title}
          </h2>
          <div className="flex md:block justify-start items-center gap-4">
            <Typography variant="paragraph">
              Brand:{" "}
              <span className="text-blue-500">
                {product?.specification?.Brand}
              </span>
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
          </div>
          <div className="flex gap-5 items-center">
            <h5 className="text-base text-red-400 font-semibold line-through">
              TK. {price?.real_price}
            </h5>
            <h5 className="md:text-lg font-semibold text-gray-800">
              TK. {price?.discounted_price}
            </h5>
            {/* <p className="text-sm hidden md:inline-block text-gray-600">
                  You save TK. {parseInt(price?.real_price - price?.discounted_price)} (
                  {parseInt(
                    ((price?.real_price - price?.discounted_price) /
                      price?.real_price) *
                      100
                  )}
                  %)
                </p> */}
          </div>
          <ButtonGroup
            className="float-right xl:absolute xl:bottom-7 xl:right-7"
            radius="lg"
            color="primary"
            variant="flat"
          >
            <Button
              isIconOnly
              onClick={() => setQuantity(quantity !== 1 ? quantity - 1 : 1)}
            >
              <img className="w-4" src={minus} />
            </Button>
            <Button isIconOnly className="!w-5">
              {quantity}
            </Button>
            <Button isIconOnly onClick={() => setQuantity(quantity + 1)}>
              <img className="w-4" src={plus} />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
