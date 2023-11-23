import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {transactionId} = useParams();
    console.log(transactionId);
    return (
        <div className="w-full h-[500px] flex flex-col gap-5 justify-center items-center">
            <h1 className="text-green-500 text-3xl font-bold">Payment Successfully done</h1>
            <h3 className="text-gray-900 font-semibold text-lg">Your Transaction Id is: <span className="text-red-400">{transactionId}</span></h3>
        </div>
    );
};

export default PaymentSuccess;