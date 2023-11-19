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
        <div className="max-w-7xl mx-auto pt-14">
            <div className="grid grid-cols-12 h-screen">
                <div className="col-span-7 space-y-4">
                    {
                        products?.map((product, index) => <CartProductCard key={index} product={product}></CartProductCard>)
                    }
                </div>
                <div className="col-span-5"></div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Cart;