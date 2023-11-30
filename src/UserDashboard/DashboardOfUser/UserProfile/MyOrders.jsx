import HoverProductCard from "../../../Components/HoverProductCart/HoverProductCard";
import SecondaryProductCard from "../../../Components/SecondaryProductCard/SecondaryProductCard";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const MyOrders = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory({
        category: "iron"
      });
      if (isProductsLoading) {
        return (
          <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">
            Loading...................
          </h1>
        );
      }
      console.log(products);
    return (
        <div className="flex justify-center items-center h-screen">
            <SecondaryProductCard product={products[4]} apipath={"products"}></SecondaryProductCard>
        </div>
    );
};

export default MyOrders;