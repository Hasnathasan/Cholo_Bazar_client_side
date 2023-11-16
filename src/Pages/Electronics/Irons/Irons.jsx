// import { Slider } from "@nextui-org/slider";

import SecondaryProductContainer from "../../../Components/SecondaryProductContainer/SecondaryProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const Irons = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory("iron");
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full mx-auto">    
            <SecondaryProductContainer slidesToShow={4} data={products} apiPath={"products"} headding={"Deals on Rokomari Products"}></SecondaryProductContainer>
        </div>
    );
};

export default Irons;