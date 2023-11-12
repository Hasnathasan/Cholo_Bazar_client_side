import { useState } from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
const ProductCard = ({product, apiPath}) => {
    const [hover, setHover] = useState(false)
    const {_id, specification, images, price} = product;
    console.log(product);
    return (
        <>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='md:flex hidden flex-col justify-between text-center hover-effect h-[340px] px-2 pt-5 relative'>
            <img className='h-[180px]' src={images[0]} alt="" />
            <div className=' p-2 space-y-2'>
            <h3 className='text-sm'>{specification.title}</h3>
            <h4 className='text-sm text-gray-500'>{specification.brand}</h4>
            <div className='flex justify-around items-end'>
                <h4 className='text-[15px] text-gray-700 line-through'>৳{price.real_price}</h4>
                <h4 className=' font-semibold'>৳{price.discounted_price}</h4>
                <h4 className='text-red-500 text-sm'>{parseInt(((price.real_price-price.discounted_price) / price.real_price ) * 100)}% OFF</h4>
            </div>
            <Link to={`/details/${apiPath}/${_id}`}><button className={`w-full bg-blue-400 py-[9px] text-white font-bold ${hover ? "visible": "invisible"} absolute left-0 bottom-0`}>View Details</button></Link>
            </div>
        </div>


        {/* Component for small device */}
        <div className='md:hidden h-[300px] relative'>
        <Link to={`/details/${apiPath}/${_id}`}>
            <div className='flex flex-col justify-between text-center pt-3'>
            <img className='h-[130px] w-3/4 mx-auto' src={images[0]} alt="" />
            <div className=' p-2 space-y-1 absolute bottom-0'>
            <h3 className='text-sm'>{specification.title}</h3>
            <h4 className='text-sm text-gray-600'>{specification.brand}</h4>
            <div className='flex items-start gap-1 text-sm justify-center'>
            <Rating
                  className="text-orange-400"
                  emptySymbol={<IoStarOutline></IoStarOutline>}
                  fullSymbol={<IoStarSharp></IoStarSharp>}
                  fractions={2}
                  initialRating={product.rating}
                  readonly
          />
          <p className="">({product?.number_of_ratings || 0})</p>
            </div>
            <div className='flex justify-center gap-2 items-end'>
                <h4 className='text-gray-600 font-semibold line-through'>TK.{price.real_price}</h4>
                <h4 className='text-[#2b2b2b] font-semibold'>TK.{price.discounted_price}</h4>
            </div>
            </div>
        </div>
        </Link>
        </div>
        </>
    );
};

export default ProductCard;