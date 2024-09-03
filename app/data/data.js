import Education from "../svgs/Education";
import Person from "../svgs/Person";
import Work from "../svgs/Work";
import DigitalMarketer from "../svgs/DigitalMarketer";
import Sales from "../svgs/Sales";
import Marketing from "../svgs/Marketing";
import Graphics from "../svgs/Graphics";
import Ecommerce from "../svgs/Ecommerce";
import Business from "../svgs/Business";
import { FaBirthdayCake } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiSolidBusSchool } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BiMessage } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { IoIosHome } from "react-icons/io";

export const aboutMe = [
  {
    title: "Residence",
    svg: Person,
    num1: "25 May 2002",
    num2: "Lahore, Pakistan",
    icon1: FaBirthdayCake,
    icon2: FaMapMarkerAlt,
  },
  {
    title: "Education",
    svg: Education,
    num1: "University of the Punjab",
    num2: "Punjab Group of Colleges",
    icon1: FaUniversity,
    icon2: BiSolidBusSchool,
  },
  {
    title: "Work",
    svg: Work,
    num1: "Allied Bank Limited",
    num2: "Zammen.com",
    icon1: FaMoneyBill1Wave,
    icon2: IoIosHome,
  },
];

export const experiences = [
  {
    id: 0,
    position: "Business Development Associate",
    organization: "Zameen.com",
    location: "Lahore, Pakistan",
    svg: Business,
  },
  {
    id: 1,
    position: "Digital Marketer",
    organization: "AS Community Hub",
    location: "Remote, Pakistan",
    svg: DigitalMarketer,
  },
  {
    id: 2,
    position: "Marketing Intern",
    organization: "Indus Home Appliances",
    location: "Gujranwala, Pakistan",
    svg: Marketing,
  },
  {
    id: 3,
    position: "ECommerce",
    organization: "Daraz.pk",
    location: "Remote, Pakistan",
    svg: Ecommerce,
  },
  {
    id: 4,
    position: "Graphic Designer",
    organization: "Fiver",
    location: "Freelance",
    svg: Graphics,
  },
  {
    id: 5,
    position: "Sales Person",
    organization: "Clotonline.pk",
    location: "Lahore, Pakistan",
    svg: Sales,
  },
];

export const links = [
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/taha-aamir",
  },

  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/tahaaamir80?igsh=MTUxbzk0aTk0NGUw",
  },
  {
    title: "Website",
    icon: <TbWorld />,
    href: "https://taha-aamir.vercel.app/",
  },
  // {
  //   title: "Message",
  //   icon: <BiMessage />,
  //   href: "mailto",
  // },
];
