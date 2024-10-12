import React from 'react';
import contactlaptop from '../assets/laptopforcontact.png';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { RiTelegramLine } from 'react-icons/ri';
import { BsEnvelope, BsFacebook, BsInstagram, BsLinkedin, BsSkype, BsTelegram, BsTiktok, BsTwitterX } from 'react-icons/bs';
const Icon = ({ path, viewBox = "0 0 24 24" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox} fill="currentColor" className="w-6 h-6">
    <path d={path} />
  </svg>
);

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <BsLinkedin className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://ng.linkedin.com/in/robinsonhonouramadi',
    color: 'bg-[#0A66C2]',
    textColor: 'text-[#0A66C2]'
  },
  {
    name: 'Instagram',
    icon: <BsInstagram className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://www.instagram.com/robinsonhonour/profilecard/?igsh=NXA2N3F4Z2ppbDBw',
    color: 'bg-gradient-to-r from-[#FCAF45] via-[#E1306C] to-[#833AB4]',
    textColor: 'text-[#E1306C]'
  },
  {
    name: 'Tiktok',
    icon: <BsTiktok className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://www.tiktok.com/@codewithhonour',
    color: 'bg-[#000]',
    textColor: 'text-[#000]'
  },
  {
    name: 'Facebook',
    icon: <BsFacebook className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://www.facebook.com/honour.robinson.1?mibextid=LQQJ4d',
    color: 'bg-[#1877F2]',
    textColor: 'text-[#1877F2]'
  },
  {
    name: 'Telegram',
    icon: <BsTelegram className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://t.me/codewith_honour',
    color: 'bg-[#26A5E4]',
    textColor: 'text-[#26A5E4]'
  },
  {
    name: 'Twitter',
    icon: <BsTwitterX className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'https://x.com/honour_can_code',
    color: 'bg-black',
    textColor: 'text-black'
  },
 
  {
    name: 'Email',
    icon: <BsEnvelope className='w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]' />,
    link: 'mailto:codewithhonour@gmail.com',
    color: 'bg-[#555]',
    textColor: 'text-[#555]'
  },
];

const ConnectWithMe = () => {
  return (
    <div className="bg-black my-[5rem]  p-8     md:p-12 flex flex-col items-center justify-center" id='contact'>
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Contact Me
        <span className="absolute -top-4 -left-7  text-purple-400/20 text-4xl md:text-6xl">Contact Me</span>
      </h2>
      <div className="flex-col md:flex-row flex justify-center flex-wrap gap-4 mt-10 mb-4 w-full gap-[1rem]   md:gap-[1.5rem] md:max-w-7xl">
        {socialLinks.map((link) => (
          <button key={link.name} className="flex w-auto justify-between items-center bg-white text-black rounded-full py-[.5rem] md:py-[1.5rem] px-[1rem] md:px-[2rem] hover:opacity-90 transition-opacity">
            <span className={`${link.color} text-white p-2 rounded-full mr-2`}>
              {link.icon}
            </span>
            <span className={` text-2xl md:text-4xl font-semibold ${link.textColor}`}>{link.name}</span>
          </button>
        ))}
      </div>



      <div className="mt-8">
        <img src={contactlaptop} alt="Person holding laptop" className="w-full object-cover" />
      </div>

    </div>
  );
};

export default ConnectWithMe;