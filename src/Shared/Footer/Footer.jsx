import { ButtonGroup, Input, Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter, FaWhatsapp } from "react-icons/fa";
import CholoBazar from '../../../public/rokomari_logo.png'
 
const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
];
 
const currentYear = new Date().getFullYear();
 
const Footer = () => {
  return (
    <footer className="relative z-[50000] w-full bg-gray-300">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid justify-between w-full grid-cols-1 gap-6 md:gap-8 lg:gap-32 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <Typography variant="h5" className="mb-8">
            <img className="w-44 rounded-3xl" src={CholoBazar} alt="" />
          </Typography>
          <Typography variant="h6" className="mb-3">
                Subscribe us
          </Typography>
          <ButtonGroup className="w-[28px]"><Input size="lg" className="p-3" label="Email" /><button className="bg-gray-800 text-base p-2 relative -left-[6px] hover:bg-gray-900 text-white rounded-r-md">Send</button></ButtonGroup>
          
            </div>
        
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography key={key} as="li" color="blue-gray" className="font-normal">
                    <a
                      href="#"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://e-commerce-d863f.web.app/">emart</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaFacebook></FaFacebook>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTwitter></FaTwitter>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaTelegramPlane></FaTelegramPlane>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaWhatsapp></FaWhatsapp>
            </Typography>
            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagram></FaInstagram>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;