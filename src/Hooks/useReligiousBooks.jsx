import { useQuery } from "@tanstack/react-query";

const useReligiousBooks = () => {
    const { data: religiousBooks, isLoading: isReligiousBooksLoading } = useQuery({
        queryKey: ['islami-books'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/booksByCategory/relegious-books');
            return res.json()
        },
      })
      return [religiousBooks, isReligiousBooksLoading]
};

export default useReligiousBooks;