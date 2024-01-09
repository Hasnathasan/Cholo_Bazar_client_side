import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const UseProductsByMainCategory = ({ category, sort }) => {
  const [axiosSecure] = useAxiosSecure();
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: [`${category}Products`, sort],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/productsByMainCate?mainCategory=${category}${
          sort ? `&sort=${sort}` : ""
        }`
      );
      return res.data;
    },
  });
  return [products, isProductsLoading];
};

export default UseProductsByMainCategory;
