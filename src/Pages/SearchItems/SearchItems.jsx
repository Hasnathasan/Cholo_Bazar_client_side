import { useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";

const SearchItems = () => {
    const [products, setProducts] = useState([])
    return (
        <div className="w-full py-9 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
    );
};

export default SearchItems;