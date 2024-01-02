import { useContext, useEffect, useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { AuthContext } from "../../Providers/AuthProvider";
import useProductsByName from "../../Hooks/useProductsByName";

const SearchItems = () => {
  const { filter, setFilter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = useProductsByName({
    name: "kettle",
    sort,
  });
  if (isProductsLoading) {
    return (
      <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">
        Loading...................
      </h1>
    );
  }
    return (
        <div className="w-full py-9 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
    );
};

export default SearchItems;