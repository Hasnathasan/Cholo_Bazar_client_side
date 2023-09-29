import { useQuery } from "@tanstack/react-query";

const useHotDeals = () => {
    const { data: hotDeals, isLoading: isHotDealsLoading } = useQuery({
        queryKey: ['hot-deals'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/hot-deals');
            return res.json()
        },
      })
      return [hotDeals, isHotDealsLoading]
};

export default useHotDeals;