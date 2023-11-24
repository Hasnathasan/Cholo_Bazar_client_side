import { useContext, useEffect, useState } from "react";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";
import { AuthContext } from "../../../Providers/AuthProvider";

const AirCollers = () => {
  const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = UseProductsBySecondaryCategory({
    category: "airColler",
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
    <div className="w-full py-8 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
  );
};

export default AirCollers;
