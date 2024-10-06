import React from 'react';
import { Calendar, GraduationCap, Star } from 'lucide-react';
import user from '../assets/user.png';
const educations = [
  {
    text: "Bachelor Degree",
    author: "Rupam karmakar",
    location: "Maharashtra, India",
    flag: "IN"
  },
  {
    text: "Bachelor Degree",
    author: "Bilal Karimbath",
    location: "Dubai, UAE",
    flag: "AE"
  },

];

const EducationCard = ({ text, author, location, flag }) => (
  <div className='relative' >
    <div className="absolute bg-purple-500  blur-2xl	left-[2rem] md:left-[13rem] w-[15rem] z-10 top-[3rem] rounded-[50%] h-[10rem] top-1">

    </div>
    <div className="bg-purple-100 bg-opacity-85 hover:bg-opacity-100 relative rounded-3xl p-6 py-8 z-20 flex  flex-col justify-between h-full relative">

      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-0">
          <div
            className={` bg-stone-950 font-sora w-full md:w-auto text-purple-500 px-4 py-2 rounded-full md:text-lg font-semibold flex gap-2 items-center `}>
            <Calendar /><span> 2022 to 2024</span>
          </div>

          <div
            className={` bg-white font-sora w-full md:w-auto mt-5 md:mt-0 text-yellow-950 px-4 py-2 rounded-full md:text-lg font-semibold flex items-center `}>
            PRIMARY
          </div>

        </div>
        <p className="text-black text-lg md:text-2xl my-1 md:my-4 pt-3 flex items-center gap-3"><div className="w-10 h-10 rounded-full flex flex-col items-center justify-center bg-black"><GraduationCap className='text-purple-500' /></div> <span>{text}</span></p>
        <p className="text-black text-lg md:text-2xl my-1 md:my-4 pt-3 flex items-center gap-3"><div className="w-10 h-10 rounded-full flex flex-col items-center justify-center bg-black"><GraduationCap className='text-purple-500' /></div> <span>{text}</span></p>
      </div>

    </div>
  </div>
);

const Educations = () => {
  return (
    <div className="bg-black my-[5rem]  p-8     md:p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Education
        <span className="absolute -top-4 -left-7 text-purple-400/20 text-5xl md:text-7xl">Education</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mt-5 w-full">
        {educations.map((education, index) => (
          <EducationCard key={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default Educations;