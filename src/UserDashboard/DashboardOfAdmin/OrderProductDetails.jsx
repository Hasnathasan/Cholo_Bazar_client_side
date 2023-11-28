import { useEffect } from "react";
import { useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { useParams } from "react-router-dom";
import axios from "axios";


const OrderProductDetails = () => {
    const [data, setData] = useState([])
    const {orderId} = useParams();
    useEffect( () => {
        axios.get(`https://cholo-bazar.vercel.app/singleOrder/${orderId}`)
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    },[orderId])
    console.log(orderId, data);
    return (
        <div>
            <h1>Products are here</h1>
            <ProductContainer data={data?.order?.products} apiPath={"products"} xlCol={true}></ProductContainer>
        </div>
    );
};

export default OrderProductDetails;