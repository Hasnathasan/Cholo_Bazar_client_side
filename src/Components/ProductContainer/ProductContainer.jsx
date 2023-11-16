
import ProductCard from "../ProductCard/ProductCard";


const ProductContainer = ({data, apiPath}) => {
    
    return (
        <div className="grid grid-cols-4 gap-3 gap-y-10">
            {
                data?.map((product, index) => <ProductCard key={index} product={product} apiPath={apiPath}></ProductCard>)
            }
        </div>
    );
};

export default ProductContainer;