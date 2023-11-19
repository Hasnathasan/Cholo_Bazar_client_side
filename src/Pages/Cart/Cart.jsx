import { Card } from "@nextui-org/react";
import CartProductCard from "../../Components/CartProductCard/CartProductCard";
import UseProductsBySecondaryCategory from "../../Hooks/UseProductsBySecondaryCategory";


const Cart = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory({
        category: "iron"
      });
      if(isProductsLoading){
        return <h1>Loading............</h1>
      }
    return (
        <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-auto w-full flex flex-col items-start justify-start">
        <div className="space-y-7 w-[75%] py-10 mx-auto">
        {products?.map((product, index) => <CartProductCard key={index} product={product}></CartProductCard>)}
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
          <h2 className="text-2xl mb-3">Total Price: </h2>

          
        </ul>
      </div>
    </div>
    );
};

export default Cart;