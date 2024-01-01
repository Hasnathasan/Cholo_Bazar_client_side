import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useProductsByName = ({name, sort}) => {
    console.log(name, sort);
    const [axiosSecure] = useAxiosSecure();
    const { data: products, isLoading: isProductsLoading } = useQuery({
      queryKey: [`${name}Products`, sort],
      queryFn: async () => {
        const res = await axiosSecure.get(
          `/search?name=${name}${
            sort ? `&sort=${sort}` : ""
          }`
        );
        return res.data;
      },
    });
    return [products, isProductsLoading];
};

export default useProductsByName;