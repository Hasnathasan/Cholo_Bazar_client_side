import { Button } from "@nextui-org/react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import useCart from "../../Hooks/useCart";

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
        <div className="space-y-7 w-[75%] py-10 mx-auto">
          {cartProduct?.map((product) => (
            <CartProductCard key={product._id} product={product}></CartProductCard>
          ))}
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-96 "></div>
        <ul className="menu flex-nowrap fixed top-1/4 -left-[30%] !border-t-3 !border-blue-400 h-[400px] md:left-7 shadow-lg shadow-gray-300 bg-white px-5  py-10 w-96 space-y-2">
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
              className="basis-1/2 hover:!text-white"
              size="lg"
              color="success"
              radius="none"
              variant="ghost"
            >
              Check Out
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
