import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseProductsBySecondaryCategory = ({ category, sort }) => {
  console.log(category, sort);
  const [axiosSecure] = useAxiosSecure();
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: [`${category}Products`, sort],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/productsBySubCate?subCategory=${category}${
          sort ? `&sort=${sort}` : ""
        }`
      );
      return res.data;
    },
  });
  return [products, isProductsLoading];
};

export default UseProductsBySecondaryCategory;
