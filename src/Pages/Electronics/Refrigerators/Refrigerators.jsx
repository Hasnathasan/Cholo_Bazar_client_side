

import SecondaryProductContainer from "../../../Components/SecondaryProductContainer/SecondaryProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const Refrigerators = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory("refrigerator");
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full mx-auto">    
            <SecondaryProductContainer slidesToShow={4} data={products} apiPath={"products"} headding={"Buy All New Futuristic Refrigerators"}></SecondaryProductContainer>
        </div>
    );
};

export default Refrigerators;