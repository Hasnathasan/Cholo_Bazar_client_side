import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import Loader from "../../../Components/Loader/Loader";
import UseProductsByMainCategory from "../../../Hooks/UseProductsByMainCategory";


const AllElectronics = () => {
    const { filter } = useContext(AuthContext);
  const [sort, SetSort] = useState(null);
  useEffect(() => {
    SetSort(filter);
  }, [filter]);
  console.log(sort);
  const [products, isProductsLoading] = UseProductsByMainCategory({
    category: "electronics",
    sort,
  });
  if (isProductsLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full py-8 mx-auto">
      <ProductContainer data={products} apiPath={"products"}></ProductContainer>
    </div>
  );
};

export default AllElectronics;