import { useContext } from "react";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from "../../../Components/Loader/Loader";

const Refrigerators = () => {
  const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = UseProductsBySecondaryCategory({
    category: "refrigerator",
    sort,
  });
  if (isProductsLoading) {
    return (
      <div className="w-full text-4xl text-green-600 h-[500px] flex justify-center items-center">
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

export default Refrigerators;
