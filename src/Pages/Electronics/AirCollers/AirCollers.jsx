import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const AirCollers = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory("airColler");
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full py-8 mx-auto">    
           <ProductContainer data={products} apiPath={"products"}></ProductContainer>
        </div>
    );
};

export default AirCollers;