import { Button } from "@nextui-org/react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartProduct, isCartProductLoading] = useCart();
  if (isCartProductLoading) {
    return <h1>Loading............</h1>;
  }
  const selectedCartProducts = cartProduct.filter(
    (product) => product.isSelected == true
  );
  let totalPrice = selectedCartProducts?.reduce(
    (total, product) =>
      product.price.discounted_price * product.quantity + total,
    0
  );

  console.log(cartProduct, isCartProductLoading);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-full flex flex-col items-start justify-start">
        <div className="space-y-7 w-[75%] pt-20 md:py-10 mx-auto">
          {cartProduct?.map((product) => (
            <CartProductCard key={product._id} product={product}></CartProductCard>
          ))}
        </div>
        <label
          htmlFor="my-drawer-2"
          className="px-5 py-3 border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-250 absolute top-2 left-1 drawer-button lg:hidden"
        >
          CheckOut- price: {totalPrice.toFixed(2)}
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="md:w-96 "></div>
        <ul className="menu flex-nowrap fixed top-1/4 md:left-7 !border-t-3 !border-blue-400 h-[400px] shadow-lg shadow-gray-300 bg-white px-5  py-10 md:w-96 space-y-2">
          <h2 className="text-xl mb-3">
            Total Selected Products:{" "}
            <span className="font-semibold">{selectedCartProducts.length}</span>
          </h2>
          <h2 className="text-xl !mb-4">
            Total Price:{" "}
            <span className="font-semibold">{totalPrice.toFixed(2)} Tk</span>
          </h2>
          <label className="block font-semibold mt-5" htmlFor="coupon">
          Apply Coupon Code:
        </label>
          <div className="!mb-8 h-11 flex justify-center">
          <input
        id="coupon"
        name="coupon"
          className="p-[15px]  bg-[#fcfcfc] focus:outline-none border border-gray-300"
          type="text"
          defaultValue={"Dev-Hasnat"}
          placeholder="use 'Dev-Hasnat' to get 10% discount"
        />
        <Button
              className="basis-1/2 h-full hover:!text-white"
              size="lg"
              color="primary"
              radius="none"
              variant="solid"
            >
              Apply
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <Button
              className="basis-1/2 hover:!text-white"
              size="lg"
              color="danger"
              radius="none"
              variant="ghost"
            >
              Delete Cart
            </Button>

            
            <Button
              className="basis-1/2 !relative hover:!text-white"
              size="lg"
              color="success"
              radius="none"
              variant="ghost"
            ><Link className="absolute top-0 flex justify-center items-center left-0 right-0 bottom-0" to={"/checkOut"}>
              Check Out
            </Link></Button>
            
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
