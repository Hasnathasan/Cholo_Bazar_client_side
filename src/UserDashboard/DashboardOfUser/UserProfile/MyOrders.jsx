import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductContainer from "../../../Components/ProductContainer/ProductContainer";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const OrderProductDetails = () => {
    const [data, setData] = useState([])
    const {user} = useContext(AuthContext)
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    };
    useEffect( () => {
        axios.get(`https://cholo-bazar.vercel.app/userOrder/${user?.email}`, config)
      .then(res => {
        console.log(res);
        setData(res.data)
      })
      .catch(error => {
        console.log(error.message);
      }
      );
    },[ user?.email])
    console.log(data);
    return (
        <div>
            <div className="bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-5 rounded-md mb-5">
              <div>
              <h2 className=" text-sm font-semibold mb-2 text-gray-800">Customer Name: <span className="font-bold">{data?.order?.customerName}</span></h2>
              <h2 className="font-semibold text-sm  mb-2 text-gray-800">Email: <span className="font-bold">{data?.order?.customerEmail}</span></h2>
              <h2 className="font-semibold text-sm  mb-2 text-gray-800">Transaction Id: <span className="font-bold">{data?.transactionId}</span></h2>
             
                </div>
                <div>
             <h2 className="font-semibold text-sm  mb-2 text-gray-800">Number: <span className="font-bold">{data?.order?.phoneNumber || "Unknown"}</span></h2>
              <h2 className="font-semibold text-sm  mb-2 text-gray-800">Total Quantity: <span className="font-bold">{data?.order?.phoneNumber || "Unknown"}</span></h2>
              <h2 className="font-semibold text-sm  mb-2 text-gray-800">Total Price: {data.order?.products
                  ?.reduce(
                    (total, product) =>
                      product.price.discounted_price * product.quantity + total,
                    0
                  )
                  .toFixed(2)}{" "} Tk</h2>
             </div>
            </div>
            <ProductContainer data={data?.order?.products} apiPath={"products"} xlCol={true}></ProductContainer>
        </div>
    );
};

export default OrderProductDetails;