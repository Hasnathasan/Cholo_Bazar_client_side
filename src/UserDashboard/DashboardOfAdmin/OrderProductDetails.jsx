import { useEffect } from "react";
import { useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { useParams } from "react-router-dom";
import axios from "axios";


const OrderProductDetails = () => {
    const [data, setData] = useState([])
    const {orderId} = useParams();
    useEffect( () => {
        axios.get(`https://cholo-bazar.vercel.app/order/${orderId}`)
      .then(res => {
        setData(res.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    },[orderId])
    console.log(orderId, data);
    return (
        <ProductContainer data={data?.order?.products} apiPath={"products"} xlCol={true}></ProductContainer>
    );
};

export default OrderProductDetails;