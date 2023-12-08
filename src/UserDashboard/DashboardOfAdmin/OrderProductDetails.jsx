import { useEffect } from "react";
import { useState } from "react";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderProductDetails = () => {
  const [data, setData] = useState([]);
  const { orderId } = useParams();
  useEffect(() => {
    axios
      .get(`https://cholo-bazar.vercel.app/singleOrder/${orderId}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [orderId]);
  console.log(orderId, data);
  return (
    <div>
      <div className="bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-5 rounded-md mb-5">
        <div>
          <h2 className=" text-sm font-semibold mb-2 text-gray-800">
            Customer Name:{" "}
            <span className="font-bold">{data?.order?.customerName}</span>
          </h2>
          <h2 className="font-semibold text-sm  mb-2 text-gray-800">
            Email:{" "}
            <span className="font-bold">{data?.order?.customerEmail}</span>
          </h2>
          <h2 className="font-semibold text-sm  mb-2 text-gray-800">
            Transaction Id:{" "}
            <span className="font-bold">{data?.transactionId}</span>
          </h2>
        </div>
        <div>
          <h2 className="font-semibold text-sm  mb-2 text-gray-800">
            Number:{" "}
            <span className="font-bold">
              {data?.order?.phoneNumber || "Unknown"}
            </span>
          </h2>
          {/* <h2 className="font-semibold text-sm  mb-2 text-gray-800">
            Total Quantity:{" "}
            <span className="font-bold">
              {data?.order?.phoneNumber || "Unknown"}
            </span>
          </h2> */}
          <h2 className="font-semibold text-sm  mb-2 text-gray-800">
            Total Price:{" "}
            {data.order?.products
              ?.reduce(
                (total, product) =>
                  product.price.discounted_price * product.quantity + total,
                0
              )
              .toFixed(2)}{" "}
            Tk
          </h2>
        </div>
      </div>
      <ProductContainer
        data={data?.order?.products}
        apiPath={"products"}
        xlCol={true}
      ></ProductContainer>
    </div>
  );
};

export default OrderProductDetails;
