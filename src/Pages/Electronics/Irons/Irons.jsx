// import { Slider } from "@nextui-org/slider";

import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const Irons = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory("iron");
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full py-8 mx-auto">    
           <ProductContainer data={products} apiPath={"products"}></ProductContainer>
        </div>
    );
};

export default Irons;