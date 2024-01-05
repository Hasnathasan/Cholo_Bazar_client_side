import { useContext, useEffect, useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { AuthContext } from "../../Providers/AuthProvider";
import useProductsByName from "../../Hooks/useProductsByName";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";

const SearchItems = () => {
  const { name } = useParams();
  console.log(name);
  const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = useProductsByName({
    name: name,
    sort,
  });
  if (isProductsLoading) {
    return (
      <div className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }
  return (
    <div className="w-full py-9 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
  );
};

export default SearchItems;
