import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const UseProductsBySecondaryCategory = (category) => {
    console.log(category);
    const [axiosSecure] = useAxiosSecure()
    const { data: products, isLoading: isProductsLoading } = useQuery({
        queryKey: [`${category}Products`],
        queryFn: async() => {
            const res = await axiosSecure.get(`/productsBySubCate?subCategory=${category}`)
            return res.data;
        },
      })
      return [products, isProductsLoading];
};

export default UseProductsBySecondaryCategory;
