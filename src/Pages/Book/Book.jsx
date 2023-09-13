import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import useHotDeals from "../../Hooks/useHotDeals";
import FictionNonFicBookContainer from "./FictionNonFicBookContainer/FictionNonFicBookContainer";

const Book = () => {
    const [hotDeals, isHotDealsLoading] = useHotDeals();
      if(isHotDealsLoading){
        return <h1>Loading</h1>
      }
    return (
        <div>
            <HomeSlider></HomeSlider>
            <ProductContainer data={hotDeals} apiPath={"hot-deals"} headding={"Deals on Rokomari Products"}></ProductContainer>
            <FictionNonFicBookContainer></FictionNonFicBookContainer>
        </div>
    );
};

export default Book;