import React from 'react';
import { Calendar, Laptop, MapPin, Star } from 'lucide-react';
import projectui from '../assets/projectui.png';
import pxxl from '../assets/pxxl.png';
import developer from '../assets/developer.png';
import { BiCaretRight } from 'react-icons/bi';
import { Link2, Info } from 'lucide-react';

const technologies = [
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Bootstrap', icon: 'B' },
  { name: 'ReactJS', icon: 'React' },
 
];

const CricTrackerCard = ({color}) => {
  return (
    <div className={`${color} text-white p-6 rounded-3xl max-w-7xl mx-auto`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">

        </div>
        <button className="bg-white rounded-full p-2">
          <Info className="w-5 h-5 text-blue-900" />
        </button>
      </div>

 
      <div className="mt-4 flex flex-col md:flex-row space-x-4">
        <div className="flex-1">
          <img src={projectui} alt="CricTracker Website" className="rounded-xl w-full" />
        </div>
        <div className="flex-1">
          <div className="mt-6">
            <h2 className="text-4xl  my-2 mt-5 font-bold">CricTracker</h2>

            <h3 className="text-lg mb-2 mt-[2rem] text-center md:text-start">Project Category</h3>
            <div className="flex space-x-2">
              <span className="bg-blue-800 w-1/2 text-center py-2 md:px-6 md:py-2 rounded-full text-lg">Website</span>
              <span className="bg-blue-800 w-1/2 text-center py-2 md:px-6 md:py-2 rounded-full text-lg">Admin Panel</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-2 text-center md:text-start" >Technologies I used</h3>
            <div className="flex flex-wrap flex-col md:flex-row justify-between items-center gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white text-blue-900 px-6 py-2 rounded-full text-lg flex items-center space-x-1">
                  <span className="font-bold">{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-blue-700 w-full md:w-auto  hover:bg-blue-600 px-4 py-2 rounded-full flex items-center justify-between md:justify-start space-x-2">
              <Link2 className="w-4 h-4" />
              <span className='text-center'>Go To CricTracker</span>
            </button>
          </div>        </div>
      </div>


    </div>
  );
};


const Works = () => {
  return (
    <div className="bg-black my-[5rem] p-8 md:p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Works
        <span className="absolute -top-3 -left-4 text-purple-400/20 text-5xl md:text-7xl">Works</span>
      </h2>
      <div className="grid grid-cols-1  gap-6 max-w-7xl my-5 w-full">
        <CricTrackerCard color={'bg-purple-900 bg-opacity-50'} />
        <CricTrackerCard color={'bg-purple-800  bg-opacity-50'} />
        <CricTrackerCard color={'bg-purple-900 bg-opacity-50'} />
        <CricTrackerCard color={'bg-purple-800  bg-opacity-50'} />
      </div>
    </div>
  );
};

export default Works;