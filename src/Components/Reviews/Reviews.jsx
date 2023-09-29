import Rating from 'react-rating';
import speakerIco from '../../../public/megaphone.png'
import ratingChart from '../../../public/ratingChart.png'
import { IoStarOutline, IoStarSharp } from "react-icons/io5";

const Reviews = ({product}) => {
    console.log(product);
    const { reviews, ratings, number_of_ratings } = product;
    return (
        <div>
            <h2 className="text-2xl text-gray-700 mb-2">Reviews and Ratings</h2>
            <div className='flex items-start gap-2 max-w-[650px]'>
                <img className='mt-1' src={speakerIco} alt="" />
                <p className='text-gray-600 text-sm'>অর্ডারকৃত প্রোডাক্টে রিভিউ এবং রেটিং দিয়ে ৫০ পয়েন্ট সংগ্রহ করতে পারেন। সর্বনিম্ন ৩০ টি শব্দ এবং প্রোডাক্ট/প্যাকেটের ছবি সংযুক্ত করতে হবে।</p>
            </div>
            <div className='flex justify-between mt-5'>
                <div className='space-y-2'>
                    <h4 className="text-gray-700 text-lg">Rate this product</h4>
                    <Rating
                    className="text-orange-400"
                    emptySymbol={<IoStarOutline className='w-6 h-6 opacity-75'></IoStarOutline>}
                    fullSymbol={<IoStarSharp className='w-6 h-6'></IoStarSharp>}
                    fractions={2}
            />
            <button className="py-2 px-6 block border border-[#2093ff] duration-200 text-[#2093ff] text-[15px] rounded-l-sm">Write a review</button>
                </div>
                <div className='flex items-end gap-8'>
                    <div className=' space-y-1'>
                        <h2 className='text-[42px] text-gray-800'>{ratings}</h2>
                    <Rating
                    className="text-orange-400"
                    emptySymbol={<IoStarOutline></IoStarOutline>}
                    fullSymbol={<IoStarSharp></IoStarSharp>}
                    fractions={2}
                    initialRating={ratings}
                    readonly
            />
            <p className=" text-gray-600">{number_of_ratings} Ratings and {reviews} Reviews</p>
                    </div>
                    <div>
                        <img src={ratingChart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;