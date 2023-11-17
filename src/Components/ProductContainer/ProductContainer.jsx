
import ProductCard from "../ProductCard/ProductCard";


const ProductContainer = ({data, apiPath}) => {
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-8">
            {
                data?.map((product, index) => <ProductCard key={index} product={product} apiPath={apiPath}></ProductCard>)
            }
        </div>
    );
};

export default ProductContainer;