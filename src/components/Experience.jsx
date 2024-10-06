import React from 'react';
import { Calendar, Laptop, MapPin, Star } from 'lucide-react';
import user from '../assets/user.png';
import pxxl from '../assets/pxxl.png';
import developer from '../assets/developer.png';
import { BiCaretRight } from 'react-icons/bi';

const experiences = [
  {
    text: "His designing skill and programming skill is really good and very collaborative.",
    author: "Rupam karmakar",
    location: "Maharashtra, India",
    flag: "IN"
  },
  {
    text: "Nikunj delivered excellent work on the Next.js project, and I thoroughly enjoyed collaborating with him. His communication was clear, he consistently met all deadlines, and demonstrated strong skills.",
    author: "Bilal Karimbath",
    location: "Dubai, UAE",
    flag: "AE"
  }
];

const ExperiencesCard = ({ text, author, location, flag }) => (
  <div className="bg-purple-300 bg-opacity-30 rounded-3xl p-6 flex my-5 flex-col justify-between h-full">
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
        <button className="bg-purple-300 bg-opacity-20 text-black pr-2 py-2 h-[4rem] pl-[3.5rem] rounded-full md:w-1/5 relative flex items-center">
          <div className="flex flex-col items-start justify-center">
            <span className="mx-4 text-lg  font-gluten text-purple-400">Pxxl Space</span>
            <span className="mx-4 text-white text-sm  font-sora flex space-between gap-1"><MapPin size={17} /> <span>PH, Nigeria</span></span>

          </div>
          <div className="bg-purple-800 h-[4rem] w-[4rem] left-0 rounded absolute rounded-full flex flex-col align-center items-center justify-center">
            <img src={pxxl} alt={author} className="w-[3rem] h-[3rem] rounded-full  " />
          </div>
        </button>
        <div className="bg-black mt-5 md:mt-0 font-sora text-white px-4 py-2 rounded-full text-lg font-semibold flex items-center gap-2">
          <Calendar /> <span>2024 - Present</span>
        </div>

      </div>
      <p className="text-white text-2xl py-4 flex gap-1 font-sora flex-row items-center">
        <img src={developer} className="w-8 h-8 rounded-full mr-3" />
        <span>Frontend Developer</span>
      </p>

      <p className="text-white md:text-lg py-2 flex gap-1 font-sora">
        <Laptop /> <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et odit cupiditate, aliquid adipisci autem sapiente ratione?
        </span>
      </p>
      <p className="text-white md:text-lg py-2 flex gap-1 font-sora">
        <Laptop /> <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et odit cupiditate, aliquid adipisci autem sapiente ratione?
        </span>
      </p>
      <p className="text-white md:text-lg py-2 flex gap-1 font-sora">
        <Laptop /> <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et odit cupiditate, aliquid adipisci autem sapiente ratione?
        </span>
      </p>
    </div>
    
  </div>
);

const Experiences = () => {
  return (
    <div className="bg-black my-[5rem]  p-8     md:p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Experiences
        <span className="absolute -top-4 -left-7 text-purple-400/20 text-5xl md:text-7xl">Experiences</span>
      </h2>
      <div className="grid grid-cols-1  gap-6 max-w-7xl my-5 w-full">
        {experiences.map((testimonial, index) => (
          <ExperiencesCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;