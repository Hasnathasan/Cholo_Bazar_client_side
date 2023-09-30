import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rokomari_logo from '../../../public/rokomari_logo.png'
import cart from '../../../public/cart.png'
import './Navbar.css'
import {  } from 'react-icons/fa';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className=' w-full mx-auto fixed top-0 z-50 h-[85px] bg-white'>
            <div className='flex justify-between items-center py-5 px-4 lg:px-20'>
                <Link to="/"><img className='w-32' src={rokomari_logo} alt="Logo of rokomari.com" /></Link>
                <form className='md:flex rounded-md hidden max-w-xl'>
                    <select className='p-2 border-l border-t rounded-l border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='border md:w-[300px] lg:w-[545px] border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-sky-500 border-2 border-sky-500  rounded-r'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
                <div className='flex justify-between items-center gap-7'>
                    <button>
                        <img className='w-9' src={cart} alt="" />
                    </button>
                    {
                        user ? <button>User is here</button> : <Link to="/login"><button className='px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'>Sign In</button></Link>
                    }
                </div>
            </div>
            <div>
            <form className='md:hidden rounded-sm overflow-hidden flex max-w-lg mx-auto px-4'>
                    <select className='p-2 border-l border-t w-20 border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-sky-500 border-2 border-sky-500'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
            </div>
            
        </div>
    );
};

export default Navbar;