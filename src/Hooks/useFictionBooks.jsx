import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useFictionBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: fictionBooks, isLoading: isFictionBooksLoading } = useQuery({
    queryKey: ["fictionBooks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/booksByCategory/fiction-books");
      return res.data;
    },
  });
  return [fictionBooks, isFictionBooksLoading];
};

export default useFictionBooks;
