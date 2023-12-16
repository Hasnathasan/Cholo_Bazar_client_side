import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useNonFictionBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: nonFictionBooks, isLoading: isNonFictionBooksLoading } =
    useQuery({
      queryKey: ["nonFictionBooks"],
      queryFn: async () => {
        const res = await axiosSecure.get("/booksByCategory/non-fiction-books");
        return res.data;
      },
    });
  return [nonFictionBooks, isNonFictionBooksLoading];
};

export default useNonFictionBooks;
