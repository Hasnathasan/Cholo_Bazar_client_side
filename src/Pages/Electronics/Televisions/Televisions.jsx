import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";


const Televisions = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory("television");
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full py-9 mx-auto">    
           <ProductContainer data={products} apiPath={"products"}></ProductContainer>
        </div>
    );
};

export default Televisions;