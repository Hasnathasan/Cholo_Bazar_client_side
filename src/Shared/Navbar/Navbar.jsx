import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rokomari_logo from '../../../public/rokomari_logo.png'
import cart from '../../../public/cart.png'
import './Navbar.css'
import { FaAngleDown, FaCalculator, FaCar, FaHome, FaPrescriptionBottleAlt } from 'react-icons/fa';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Card, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Accordion, AccordionBody, AccordionHeader, Chip, Drawer, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react';
import hamBurger from '../../../public/hamburger.png'
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [openAccordian, setOpenAccordian] = useState(0);
 
  const handleOpen = (value) => {
    setOpenAccordian(openAccordian === value ? 0 : value);
  };
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
    const {user, logout} = useContext(AuthContext)
    return (
        <div className=' w-full mx-auto fixed top-0 z-50 h-[85px] bg-white'>
            <div className='flex justify-between items-center py-5 px-4 lg:px-20'>
                <div className='md:hidden'>
                <img className='w-6' onClick={openDrawer} src={hamBurger} alt="" />
      <Drawer open={open} onClose={closeDrawer} className="p-0">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] rounded-none p-0 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 bg-[#0397d3] text-white py-[10px] px-3 flex items-center justify-between gap-1">
        <div className='flex items-center gap-1'>
        <FaHome className='w-5 h-4'></FaHome>
        <p className='text-xl'>Home</p>
        </div>
        <RxCross2 onClick={closeDrawer} className='w-6 h-6'></RxCross2>
      </div>
      <List>
        <Accordion
          open={openAccordian === 1}
          icon={<FaAngleDown></FaAngleDown>}
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <FaPrescriptionBottleAlt></FaPrescriptionBottleAlt>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCalculator></FaCalculator>
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCalculator></FaCalculator>
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={openAccordian === 2}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem ripple={false}>
                <ListItemPrefix>
                <FaCalculator></FaCalculator>
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem ripple={false}>
                <ListItemPrefix>
                <FaCalculator></FaCalculator>
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem ripple={false}>
          <ListItemPrefix>
          <FaCalculator></FaCalculator>
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem ripple={false}>
          <ListItemPrefix>
          <FaCalculator></FaCalculator>
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem ripple={false}>
          <ListItemPrefix>
          <FaCalculator></FaCalculator>
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem ripple={false}>
          <ListItemPrefix>
          <FaCalculator></FaCalculator>
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
      </Drawer>
                </div>
                <Link to="/"><img className='w-32' src={rokomari_logo} alt="Logo of rokomari.com" /></Link>
                <form className='md:flex rounded-md hidden max-w-xl'>
                    <select className='p-2 border-l border-t rounded-l border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='border md:w-[300px] lg:w-[545px] border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-cyan-500 border-2 border-cyan-500  rounded-r'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
                <div className='flex justify-between items-center gap-7'>
                    <button>
                        <img className='w-9' src={cart} alt="" />
                    </button>
                    {
                        user ? 
                        <Dropdown className='dropdown-classes' >
      <DropdownTrigger>
      <button className='px-7 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'>Hasnat Hasan</button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={"default"}
        variant={""}
        itemClasses={{padding: "0px"}}
        className='dropdownMenuClasses'
      >
        <DropdownItem key="account"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/my-section/profile'}>My Account</NavLink></DropdownItem>      
        <DropdownItem key="order"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myOrders'}>My Orders</NavLink></DropdownItem>      
        <DropdownItem key="free-book"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/downloadFreeBook'}>Download Free Book</NavLink></DropdownItem>
        <DropdownItem key="ebook"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myEbook'}>My eBook Library</NavLink></DropdownItem>
        <DropdownItem key="list"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myList'}>My List</NavLink></DropdownItem>
        <DropdownItem key="book-self"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/bookShelf'}>My Book Shelf</NavLink></DropdownItem>
        <DropdownItem key="wishlist"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myWishlish'}>My Wishlist</NavLink></DropdownItem>
        <DropdownItem key="rating-review"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myRatingReviews'}>My Rating Reviews</NavLink></DropdownItem>
        <DropdownItem key="points"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myPoints'}>My Points</NavLink></DropdownItem>
        <DropdownItem key="followed-authors"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myFollowedAuthors'}>My Following Authors</NavLink></DropdownItem>
        <DropdownItem showDivider={true} key="bkash-account"><NavLink className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myBkashAccount'}>My Bkash Account</NavLink></DropdownItem>
        <DropdownItem key="signOut" onClick={logout}><span className="block text-base font-normal hover:text-sky-600 py-2" >Sign Out</span></DropdownItem>

      </DropdownMenu>
    </Dropdown>
                        : <Link to="/login"><button className='px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'>Sign In</button></Link>
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