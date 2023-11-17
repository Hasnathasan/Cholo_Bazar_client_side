import { useContext } from "react";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import UseProductsBySecondaryCategory from "../../../Hooks/UseProductsBySecondaryCategory";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";


const Kettles = () => {
    const {filter, setFilter} = useContext(AuthContext);
    const [sort, SetSort] = useState(null)
    useEffect( () => {
        SetSort(filter)
    },[filter])
    console.log(sort);
    const [products, isProductsLoading] = UseProductsBySecondaryCategory({category: "kettle", sort});
    if(isProductsLoading){
        return <h1 className="w-full text-4xl text-green-600 h-screen flex justify-center items-center">Loading...................</h1>
    }
    return (
        <div className="w-full py-8 mx-auto">    
           <ProductContainer data={products} apiPath={"products"}></ProductContainer>
        </div>
    );
};

export default Kettles;