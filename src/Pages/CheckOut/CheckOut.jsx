import { useForm } from "react-hook-form";
import useUser from "../../Hooks/useUser";
import { Typography } from "@material-tailwind/react";
import useCart from "../../Hooks/useCart";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";


const CheckOut = () => {
    const [userData] = useUser();
    const [cartProduct, isCartProductLoading] = useCart();
  
 
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        const {customerName, address, phoneNumber} = data
        const order = {customerName, customerEmail: userData?.email, address, phoneNumber, products: selectedCartProducts}
        axios.post('http://localhost:8000/order', order)
      .then(res => {
        console.log(res.data);
        if(res.data.url){
          window.location.replace(res.data.url)
        }
      })
      .catch(function (error) {
        console.log(error);
      })
        }
        if (isCartProductLoading) {
            return <h1>Loading............</h1>;
        }
          const selectedCartProducts = cartProduct?.filter(
              (product) => product.isSelected == true
          );
          let totalPrice = selectedCartProducts?.reduce(
            (total, product) =>
              product.price.discounted_price * product.quantity + total,
            0
            );
            console.log(userData, selectedCartProducts, totalPrice);
    return (
        <div className="flex justify-center items-center py-16">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center items-center gap-6">
            <h5 className="text-xl font-semibold">Total Item: <Typography className="inline" variant="h4">{selectedCartProducts?.length}</Typography></h5>
                <h5 className="text-xl font-semibold">Price: <Typography className="inline" variant="h4">{totalPrice}Tk</Typography></h5>
            </div>
            <label className="block my-3" htmlFor="customerName">
          Name:
        </label>
        <input
        {...register("customerName", { required: true })}
        id="customerName"
        name="customerName"
          className="p-[15px] w-full md:w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
          defaultValue={userData?.name}
        />
            <label className="block my-3" htmlFor="address">
          Shipping Address:
        </label>
        <input
        {...register("address", { required: true })}
        id="address"
        name="address"
          className="p-[15px] w-full md:w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="text"
        />
            <label className="block my-3" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input
        {...register("phoneNumber", { required: true })}
        id="phoneNumber"
        name="phoneNumber"
          className="p-[15px] w-full md:w-[360px] bg-[#fcfcfc] focus:outline-none rounded border border-gray-300"
          type="tel"
          defaultValue={userData?.phoneNumber}
        />
         <Button
         type="submit"
              className="basis-1/2 block mt-3 hover:!text-white"
              size="lg"
              color="success"
              radius="none"
              variant="ghost"
            >
              Pay
            </Button>
            </form>
        </div>
    );
};

export default CheckOut;