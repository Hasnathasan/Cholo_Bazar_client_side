import { useQuery } from "@tanstack/react-query";

const useFictionBooks = () => {
    const { data: fictionBooks, isLoading: isFictionBooksLoading } = useQuery({
        queryKey: ['fictionBooks'],
        queryFn: async() => {
            const res = await fetch('https://rokomari-clone-server.vercel.app/fiction-books');
            return res.json()
        },
      })
      return [fictionBooks, isFictionBooksLoading]
};

export default useFictionBooks;