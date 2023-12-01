import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const [totalSpecification, setTotalSpecification] = useState([1]);
 
  const onSubmit = async (data) => {
    console.log(data);

    const images = data?.images;
    const main_category = data.main_category;
    const number_of_ratings = data.number_of_ratings;
    const number_of_reviews = data.number_of_reviews;
    const discounted_price = data.discounted_price;
    const real_price = data.real_price;
    const rating = data.rating;
    const secondary_category = data.secondary_category;
    const title = data.product_name;
    const brand = data.brand; 
    const brand_image = data.brand_image; 
    const brand_description = data.brand_description; 


    if (images.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }


    let imagesOfNewProduct = [];

    for (const image of images) {
      const formData = new FormData();
    formData.append('key', "d3f91f97f4271f1b700b4304ebdb8133");
      formData.append(`image`, image);
      try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData);
        const image = response?.data?.data?.url;
        console.log(image);
        imagesOfNewProduct = [...imagesOfNewProduct, image];
        
      } catch (error) {
        console.error(error);
      }
    }
    console.log(imagesOfNewProduct);

    const product = {images: imagesOfNewProduct, };
    
    
  };

  return (
    <div className="w-full px-3 md:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-sm w-full ">
          <h2 className="text-3xl font-semibol underline leading-[50px] text-gray-900 mb-4">
            Product Details:
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <Input
              {...register("product_name", { required: false })}
              type="text"
              label="Name of your Product"
              placeholder="Product name"
              variant="underlined"
              labelPlacement="outside"
            />

            <Input
              {...register("images", { required: false })}
              type="file"
              label="Choose Images"
              placeholder=" "
              multiple
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("real_price", { required: false })}
              type="number"
              label="Real Price"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("discounted_price", { required: false })}
              type="number"
              label="Price after discount"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Select
              {...register("main_category", { required: false })}
              label="Select main category"
              placeholder="Select an category"
              labelPlacement="outside"
              variant="underlined"
              className="max-w-xs"
            >
              <SelectItem key={"Electronics"}>Electronics</SelectItem>
              <SelectItem key={"kidsZone"}>Kids Zone</SelectItem>
              <SelectItem key={"personal-Care"}>Personal-Care</SelectItem>
              <SelectItem key={"daily-needs"}>Daily-needs</SelectItem>
            </Select>
            <Select
              {...register("secondary_category", { required: false })}
              label="Select Category"
              placeholder="Select an category"
              labelPlacement="outside"
              variant="underlined"
              className="max-w-xs"
            >
              <SelectItem key={"Electronics"}>Electronics</SelectItem>
              <SelectItem key={"kidsZone"}>Kids Zone</SelectItem>
              <SelectItem key={"personal-Care"}>Personal-Care</SelectItem>
              <SelectItem key={"daily-needs"}>Daily-needs</SelectItem>
            </Select>
            <Input
              {...register("rating", { required: false })}
              type="number"
              label="Product rating"
              placeholder="rating"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("countryOfOrigin", { required: false })}
              type="text"
              label="Country of origin"
              placeholder="Origin country name"
              variant="underlined"
              labelPlacement="outside"
            />
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Brand Details:
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              {...register("brand", { required: false })}
              type="text"
              label="Brand Name"
              placeholder="Name of brand"
              variant="underlined"
              labelPlacement="outside"
            />
            <input {...register("brand_image", { required: false })} type="file"/>
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Description&apos;s of Product and Brand:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Textarea
              {...register("product_summery", { required: false })}
              label="Summery of Product"
              variant="underlined"
              placeholder="Enter your Summery"
            />
            <Textarea
              {...register("brand_description", { required: false })}
              label="Description of the Brand"
              variant="underlined"
              placeholder="Enter brand description"
            />
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Product specifications:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 relative gap-10">
            <Button
              onClick={() =>
                setTotalSpecification([
                  ...totalSpecification,
                  totalSpecification.length + 1,
                ])
              }
              isIconOnly
              color="primary"
              className="text-white absolute -top-4 right-3"
              variant="solid"
              aria-label="Take a photo"
            >
              <FaPlus></FaPlus>
            </Button>
            {totalSpecification?.map((num) => (
              <div key={num} className="flex justify-start items-center">
                <Input
                  {...register(`specification_property_${num}`, {
                    required: true,
                  })}
                  type="text"
                  label="Property"
                  placeholder="Name of property"
                  variant="bordered"
                  radius="none"
                  labelPlacement="outside"
                />

                <Input
                  {...register(`specification_value_${num}`, {
                    required: true,
                  })}
                  type="text"
                  label="Value"
                  placeholder="Name of value"
                  variant="bordered"
                  radius="none"
                  labelPlacement="outside"
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          className="btn"
          color="primary"
          radius="none"
          variant="ghost"
        >
          Ghost
        </Button>
      </form>
    </div>
  );
};

export default AddNewProduct;
