import Rating from "react-rating";
import speakerIco from "../../../public/megaphone.png";
import ratingChart from "../../../public/ratingChart.png";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import like from "../../../public/like.svg";

// To Do: To make the reviews dynamic

const Reviews = ({ product }) => {
  console.log(product);
  const { number_of_reviews, reviews, rating, number_of_ratings } = product;
  return (
    <div>
      <h2 className="text-2xl text-gray-700 mb-2">Reviews and Ratings</h2>
      <div className="flex items-start gap-2 max-w-[650px]">
        <img className="mt-1" src={speakerIco} alt="" />
        <p className="text-gray-700 text-sm">
          You can collect 50 points by reviewing and rating the ordered
          products. A minimum of 30 words and product/packet image should be
          attached
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-y-4 justify-between mt-5">
        <div className="space-y-2">
          <h4 className="text-gray-700 text-lg">Rate this product</h4>
          <Rating
            className="text-orange-400"
            emptySymbol={
              <IoStarOutline className="w-6 h-6 opacity-75"></IoStarOutline>
            }
            fullSymbol={<IoStarSharp className="w-6 h-6"></IoStarSharp>}
            fractions={2}
          />
          <button className="py-2 px-6 block border border-[#2093ff] duration-200 text-[#2093ff] text-[15px] rounded-l-sm">
            Write a review
          </button>
        </div>
        <div className="flex items-end gap-8">
          <div className=" space-y-1">
            <h2 className="text-[42px] text-gray-800">{rating}</h2>
            <Rating
              className="text-orange-400"
              emptySymbol={<IoStarOutline></IoStarOutline>}
              fullSymbol={<IoStarSharp></IoStarSharp>}
              fractions={2}
              initialRating={rating}
              readonly
            />
            <p className=" text-gray-600">
              {number_of_ratings} Ratings and {number_of_reviews} Reviews
            </p>
          </div>
          <div>
            <img src={ratingChart} alt="" />
          </div>
        </div>
      </div>
      <hr className="my-7" />
      <div>
        {reviews?.map((review, index) => (
          <div key={index} className="mb-7">
            <div className="flex gap-5 items-center">
              <div className=" rounded-full w-14 h-14 bg-cyan-600 flex justify-center items-center text-xl">
                {review.reviewedBy[0]}
              </div>
              <div>
                <h4 className="text-gray-500 text-[15px]">
                  By{" "}
                  <span className="text-gray-800 text-base">
                    {review.reviewedBy}
                  </span>
                  , 28 august, 2023
                </h4>
                <div className="flex gap-2 items-end">
                  <Rating
                    className="text-orange-400"
                    emptySymbol={<IoStarOutline></IoStarOutline>}
                    fullSymbol={<IoStarSharp></IoStarSharp>}
                    fractions={2}
                    initialRating={rating}
                    readonly
                  />
                  <p className="text-green-500 flex items-center gap-1">
                    <BsShieldCheck></BsShieldCheck> Verified Purchase
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 my-4 text-[15px]">{review.review}</p>
            <p className="text-gray-500 my-2 text-sm">
              Was this review helpful to you?
            </p>
            <div className="flex gap-1">
              <button className="border border-gray-200 hover:bg-gray-100 duration-300 rounded-[4px] px-4 py-2">
                <img className="w-5 opacity-50" src={like} alt="" />
              </button>
              <button className="border border-gray-200 hover:bg-gray-100 duration-300 rounded-[4px] px-4 py-2">
                <img className="w-5 rotate-180 opacity-50" src={like} alt="" />
              </button>
            </div>
            <hr className="my-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
