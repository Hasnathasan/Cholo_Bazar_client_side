// import { Slider } from "@nextui-org/slider";

import { useContext, useEffect, useState } from "react";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";
import { AuthContext } from "../../../Providers/AuthProvider";
import Loader from "../../../Components/Loader/Loader";

const Irons = () => {
  const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = UseProductsBySecondaryCategory({
    category: "iron",
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
    <div className="w-full py-8 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
  );
};

export default Irons;
