import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rokomari_logo from '../../../public/rokomari_logo.png'
import cart from '../../../public/cart.png'
import './NavTopBar.css'
import { FaAngleDown, FaCalculator, FaCar, FaHome, FaPrescriptionBottleAlt } from 'react-icons/fa';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Card, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Navbar, NavbarBrand } from '@nextui-org/react';
import { Accordion, AccordionBody, AccordionHeader, Drawer, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import hamBurger from '../../../public/hamburger.png'
import userIcon from '../../../public/user.svg'
import notificationIcon from '../../../public/appointment-reminders.png'
import { RxCross2 } from "react-icons/rx";

const NavTopBar = () => {
    const [open, setOpen] = useState(false);
    const [openAccordian, setOpenAccordian] = useState(0);
    const [openRight, setOpenRight] = useState(false);
 
  const handleOpen = (value) => {
    setOpenAccordian(openAccordian === value ? 0 : value);
  };
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
    const {user, logout} = useContext(AuthContext)
    return (
        <>
          <Navbar className='pt-[1px] md:py-3 w-full md:fixed top-0 z-50 nav bg-white' >
                <div className='md:hidden'>
                <img className='w-5 h-5 md:w-6' onClick={openDrawer} src={hamBurger} alt="" />
                </div>
                <NavbarBrand>
                  <Link to="/"><img className='w-20 md:w-36' src={rokomari_logo} alt="Logo of rokomari.com" /></Link>
                </NavbarBrand>
               
                <form className='md:flex rounded-md hidden max-w-xl'>
                    <select className='p-2 border-l border-t rounded-l border-gray-200 border-b-2 border-b-orange-400 focus:border-b-1 focus:border-gray-200 focus:text-sky-500 focus:bg-sky-50 outline-none' name="" id="">
                        <option value="all">All</option>
                        <option value="book">Book</option>
                        <option value="superStore">Superstore</option>
                    </select>
                    <input type="text" className='border md:w-[300px] lg:w-[545px] border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-cyan-500 border-2 border-cyan-500  rounded-r'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
                </form>
                <div className='flex justify-between items-center gap-4 md:gap-7'>
                    <Link to={"/myCart"}>
                        <img className='w-6 md:w-9' src={cart} alt="" />
                    </Link>
                    <button>
                        <img className='w-6 md:w-9' src={notificationIcon} alt="" />
                    </button>
                    {
                        user ? 
                        <>
                        <div className='hidden md:block'>
                        <Dropdown shouldBlockScroll={false} className='dropdown-classes' >
      <DropdownTrigger>
      <button className='px-4 py-2 border flex items-center gap-2 border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'><img className='w-9 h-9 rounded-full' src={user.photoURL || userIcon} alt="" /> {user?.displayName}</button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Dropdown Variants"
        color={"default"}
        variant={""}
        itemClasses={{padding: "0px"}}
        className='dropdownMenuClasses'
      >
        <DropdownItem key="account"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/my-section/profile'}>My Account</Link></DropdownItem>      
        <DropdownItem key="order"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myOrders'}>My Orders</Link></DropdownItem>      
        <DropdownItem key="free-book"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/downloadFreeBook'}>Download Free Book</Link></DropdownItem>
        <DropdownItem key="ebook"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myEbook'}>My eBook Library</Link></DropdownItem>
        <DropdownItem key="list"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myList'}>My List</Link></DropdownItem>
        <DropdownItem key="book-self"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/bookShelf'}>My Book Shelf</Link></DropdownItem>
        <DropdownItem key="wishlist"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myWishlish'}>My Wishlist</Link></DropdownItem>
        <DropdownItem key="rating-review"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myRatingReviews'}>My Rating Reviews</Link></DropdownItem>
        <DropdownItem key="points"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myPoints'}>My Points</Link></DropdownItem>
        <DropdownItem key="followed-authors"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myFollowedAuthors'}>My Following Authors</Link></DropdownItem>
        <DropdownItem showDivider={true} key="bkash-account"><Link className="block text-base font-normal hover:text-sky-600 py-[5px]" to={'/myBkashAccount'}>My Bkash Account</Link></DropdownItem>
        <DropdownItem key="signOut" onClick={logout}><span className="block text-base font-normal hover:text-sky-600 py-2" >Sign Out</span></DropdownItem>

      </DropdownMenu>
    </Dropdown>
                        </div>
    <img className={` md:hidden ${user.photoURL ? "rounded-full w-7 h-7" : "w-6 h-6"}`} onClick={openDrawerRight} src={user.photoURL || userIcon} alt="" />
    </>
    
                        : <Link to="/login"><button className='px-4 py-2 border border-gray-400 rounded hover:bg-green-500 hover:text-white hover:border-green-500 transition-all'>Sign In</button></Link>
                    }
                </div>
            <div>
            </div>
          </Navbar>
            <form className='hidden mt-5 w-full rounded-sm overflow-hidden  max-w-lg md:mx-auto px-4'>
                    <input type="text" className='w-full  border border-gray-200 border-b-2 border-b-orange-400  outline-0 focus:border focus:border-sky-500 p-2' />
                    <button className=' px-3 bg-blue-500 border-2 border-blue-500 rounded-r'><FontAwesomeIcon className='text-white' icon={faMagnifyingGlass} /></button>
              </form>
          <Drawer open={open} onClose={closeDrawer} className="p-0 overflow-y-auto">
      <Card className="h-screen w-full max-w-[20rem] rounded-none p-0 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 bg-[#0397d3] text-white py-[10px] px-3 flex items-center justify-between gap-1">
        <div className='flex items-center gap-1'>
        <FaHome className='w-5 h-4'></FaHome>
        <p className='text-xl'>Home</p>
        </div>
        <RxCross2 onClick={closeDrawer} className='w-6 h-6'></RxCross2>
      </div>
      <List className='overflow-y-auto'>
        <Accordion
          open={openAccordian === 1}
          icon={<FaAngleDown className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 1 ? "rotate-180" : ""}`}></FaAngleDown>}
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <FaPrescriptionBottleAlt></FaPrescriptionBottleAlt>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              বই
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="ps-5">
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                লেখক
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                বিষয়
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                প্রকাশনী
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                ই-বুক
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                Buy 1 Get 1 Offer
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                স্টকের প্রোডাক্ট সমূহ
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                লিডারবোর্ডের ২০০ বই
              </ListItem>
                </Link>
                <Link className="flex" to={'/login'}>
              <ListItem ripple={false}>
                <ListItemPrefix>
                  <FaCar></FaCar>
                </ListItemPrefix>
                বইমেলা ২০২৩
              </ListItem>
                </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="border-blue-gray-50" />
        <Accordion
          open={openAccordian === 3}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 3}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              ইলেক্ট্রনিক্স
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
        <Accordion
          open={openAccordian === 4}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 4 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 4}>
            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              মনিহারি পণ্য
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
        <Accordion
          open={openAccordian === 5}
          icon={
            <FaCalculator
            className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 5 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 5}>
            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              কিডস জোন
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
        <Accordion
          open={openAccordian === 6}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 6 ? "rotate-180" : ""}`}
              />
          }
          >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              প্রাতিষ্ঠানিক অর্ডার
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
        <Accordion
          open={openAccordian === 6}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 6 ? "rotate-180" : ""}`}
              />
            }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              অফার সমূহ
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
        <Accordion
          open={openAccordian === 6}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 6 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              কুইজ
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
        <Accordion
          open={openAccordian === 6}
          icon={
            <FaCalculator
            className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 6 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              ব্লগ
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
        <Accordion
          open={openAccordian === 6}
          icon={
            <FaCalculator
              className={`mx-auto h-4 w-4 transition-transform ${openAccordian === 6 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem ripple={false} className="p-0" selected={openAccordian === 6}>
            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
              <ListItemPrefix>
              <FaCalculator></FaCalculator>
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              গিফট ফাইন্ডার
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
      </List>
    </Card>
      </Drawer>
      <Drawer placement="right" dismiss={{"ancestorScroll?": true}} open={openRight} onClose={closeDrawerRight} className="p-0 w-[320px]">
      <div className="mb-2 bg-[#0397d3] text-white py-[10px] px-3 flex items-center justify-between gap-1">
        <div className='flex items-center gap-1'>
        <FaHome className='w-5 h-4'></FaHome>
        <p className='text-xl'>Hasnat Hasan</p>
        </div>
        <RxCross2 onClick={closeDrawerRight} className='w-6 h-6'></RxCross2>
      </div>
      <div>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-[5px]" to={'/my-section/profile'}>My Account</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myOrders'}>My Orders</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/downloadFreeBook'}>Download Free Book</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myEbook'}>My eBook Library</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myList'}>My List</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/bookShelf'}>My Book Shelf</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myWishlish'}>My Wishlist</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myRatingReviews'}>My Rating Reviews</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myPoints'}>My Points</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myFollowedAuthors'}>My Following Authors</Link>
<Link onClick={closeDrawerRight} className="block text-lg px-2 font-normal hover:text-sky-600 py-3" to={'/myBkashAccount'}>My Bkash Account</Link>
<span onClickCapture={closeDrawerRight} onClick={logout} className="block text-base font-normal hover:text-sky-600 py-2" >Sign Out</span>
      </div>
      </Drawer>
          </>
    );
};

export default NavTopBar;