import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const [totalSpecification, setTotalSpecification] = useState([1]);
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = event.target.files;
    setImages(selectedImages);
  };
  console.log(images);
  const onSubmit = async (data) => {
    console.log(data);
    if (images.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }


    const formData = new FormData();

    for (const image of images) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          Authorization: '65e63a042c56e69',
        },
      });

      console.log('Images uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
    
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
              onChange={handleImageChange}
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
