import { useQuery } from "@tanstack/react-query";

const useFictionBooks = () => {
    const { data: fictionBooks, isLoading: isFictionBooksLoading } = useQuery({
        queryKey: ['fictionBooks'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/booksByCategory/fiction-books');
            return res.json()
        },
      })
      return [fictionBooks, isFictionBooksLoading]
};

export default useFictionBooks;