
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../Hooks/useCart";


const Cart = () => {
  const {selectedCart, setSelectedCart} = useContext(AuthContext)
    const [cartProduct, isCartProductLoading] = useCart()
      let totalPrice = selectedCart?.reduce((total, product) => product.price.discounted_price + total, 0,);
      
      if(isCartProductLoading){
        return <h1>Loading............</h1>
      }
      console.log(cartProduct, isCartProductLoading);
    return (
        <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-full flex flex-col items-start justify-start">
        <div className="space-y-7 w-[75%] py-10 mx-auto">
        {cartProduct?.map((product, index) => <CartProductCard key={index} product={product}></CartProductCard>)}
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side p-">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-96"></div>
        <ul className="menu flex-nowrap fixed top-1/4 -left-[30%] h-[400px] md:left-7 shadow-lg shadow-gray-300 bg-white px-5  py-10 w-96 space-y-2">
          <h2 className="text-2xl mb-3">Total Selected Product: {selectedCart.length}</h2>
          <h2 className="text-2xl mb-3">Total Price: {totalPrice.toFixed(2)}</h2>

          
        </ul>
      </div>
    </div>
    );
};

export default Cart;