import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ data, apiPath, width }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 px-1 md:px-0 gap-1 md:gap-4 gap-y-4 md:gap-y-8">
      {data?.map((product, index) => (
        <ProductCard
          key={index}
          width={width}
          product={product}
          apiPath={apiPath}
        ></ProductCard>
      ))}
    </div>
  );
};

export default ProductContainer;
