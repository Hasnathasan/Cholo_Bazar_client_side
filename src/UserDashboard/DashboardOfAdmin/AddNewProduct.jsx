import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";

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
    const Country_Of_Origin = data.countryOfOrigin; 
    const product_summery = data.product_summery; 
    // const specification_property_1 = data.specification_property_1; 
    // const specification_property_2 = data.specification_property_2; 
    // const specification_property_3 = data.specification_property_3; 
    // const specification_property_4 = data.specification_property_4; 
    // const specification_property_5 = data.specification_property_5; 
    // const specification_property_6 = data.specification_property_6; 
    // const specification_property_7 = data.specification_property_7; 
    // const specification_property_8 = data.specification_property_8; 
    // const specification_property_9 = data.specification_property_9; 
    // const specification_property_10 = data.specification_property_10;
    // const specification_value_1 = data.specification_value_1; 
    // const specification_value_2 = data.specification_value_2; 
    // const specification_value_3 = data.specification_value_3; 
    // const specification_value_4 = data.specification_value_4; 
    // const specification_value_5 = data.specification_value_5; 
    // const specification_value_6 = data.specification_value_6; 
    // const specification_value_7 = data.specification_value_7; 
    // const specification_value_8 = data.specification_value_8; 
    // const specification_value_9 = data.specification_value_9; 
    // const specification_value_10 = data.specification_value_10;



    const specification = {title, summery: product_summery, Country_Of_Origin,  }


    for(let i = 0; i <= 10; i++){
      const specificationProperty = `specification_property_${i}`;
      const specificationValue = `specification_value_${i}`;
      if(data[specificationProperty]){
        specification[data[specificationProperty]] = data[specificationValue]
      }
    }
console.log(specification);

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

    

    const product = {images: imagesOfNewProduct, price: {real_price, discounted_price}, brand_info: {name: brand, image: "https://static01.nyt.com/images/2021/10/02/business/00roose-fb-silo/00roose-fb-silo-superJumbo.jpg", description: brand_description}, rating, number_of_ratings, number_of_reviews, main_category, secondary_category, specification};
    
    axios.post('https://cholo-bazar.vercel.app/products', product)
      .then(res => {
        if(res.data.insertedId){
          Swal.fire({
            title: "Successfully added to Server!",
            text: "The product will seen in the Main website",
            icon: "success"
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-full px-2 md:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-sm w-full ">
          <h2 className="text-xl font-bold md:font-normal md:text-3xl font-semibol underline leading-[50px] text-gray-900 mb-4">
            Product Details:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Input
              {...register("product_name", { required: true })}
              type="text"
              label="Name of your Product"
              placeholder="Product name"
              variant="underlined"
              labelPlacement="outside"
            />
            <div>
            <label className="text-[15px] !mb-2" htmlFor="images">Select product Images</label>
            <input name="images" id="images" type="file" multiple {...register("images", { required: true })} />
            </div>
            <Input
              {...register("real_price", { required: true })}
              type="number"
              label="Real Price"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("discounted_price", { required: true })}
              type="number"
              label="Price after discount"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Select
              {...register("main_category", { required: true })}
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
              {...register("secondary_category", { required: true })}
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
              {...register("rating", { required: true })}
              type="number"
              label="Product rating"
              placeholder="rating"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("countryOfOrigin", { required: true })}
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
              {...register("brand", { required: true })}
              type="text"
              label="Brand Name"
              placeholder="Name of brand"
              variant="underlined"
              labelPlacement="outside"
            />
            <div>
            <label className="text-[15px] !mb-2" htmlFor="image">Select Brand Images</label>
            <input name="image" id="image" type="file" {...register("brand_image", { required: true })} />
            </div>
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Description&apos;s of Product and Brand:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Textarea
              {...register("product_summery", { required: true })}
              label="Summery of Product"
              variant="underlined"
              placeholder="Enter your Summery"
            />
            <Textarea
              {...register("brand_description", { required: true })}
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
        <Button
          type="submit"
          className="mt-3 block"
          size="lg"
          color="primary"
          radius="none"
          variant="ghost"
        >
          Add Product
        </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
