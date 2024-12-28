import React from 'react';
import { Calendar, Laptop, MapPin, Star } from 'lucide-react';
import user from '../assets/user.png';
import pxxl from '../assets/pxxl.png';
import indulgetixlogo from '../assets/sites/indulgetixlogo.png';
import igs from '../assets/sites/igs.png';
import organstation from '../assets/sites/organstation.png';
import developer from '../assets/developer.png';
import { BiCaretRight } from 'react-icons/bi';

const experiencesData = [
  {
    company: "Pxxl Space",
    location: "PH, Nigeria",
    flag: "NG",
    logo: pxxl,
    period: "2023 - Present",
    role: "Fullstack Developer & CEO",
    responsibilities: [
      "Led the development and implementation of innovative web solutions.",
      "Managed both frontend and backend aspects of projects.",
      "Oversaw company operations and strategic decision-making as CEO."
    ]
  },
  {
    company: "Organ Station",
    location: "Remote",
    flag: "REMOTE",
    logo: organstation,
    period: "2022 - 2023",
    role: "Backend Developer",
    responsibilities: [
      "Developed robust backend systems for healthcare applications.",
      "Implemented secure data management solutions for sensitive medical information.",
      "Collaborated with frontend teams to ensure seamless integration."
    ]
  },
  {
    company: "Indulgetix",
    location: "Lagos, Nigeria",
    flag: "NG",
    logo: indulgetixlogo,
    period: "2024 - Present",
    role: "Fullstack Developer",
    responsibilities: [
      "Built backend infrastructure for an event management platform.",
      "Designed and implemented APIs for seamless event booking and management.",
      "Optimized database performance for handling high-volume ticket sales."
    ]
  },
  {
    company: "Intelligentsia",
    location: "PH, Nigeria",
    flag: "NG",
    logo: igs,
    period: "2018 - Present",
    role: "Director of IT",
    responsibilities: [
      "Oversee all IT operations and infrastructure for the school.",
      "Implement innovative technology solutions to enhance learning experiences.",
      "Manage IT staff and ensure alignment with educational goals."
    ]
  }
];

const ExperiencesCard = ({ company, location, flag, logo, period, role, responsibilities }) => (
  <div className="bg-purple-300 bg-opacity-30 rounded-3xl p-6 flex my-5 flex-col justify-between h-full">
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
        <button className="bg-purple-300 bg-opacity-20 text-black pr-2 py-2 h-[4rem] pl-[3.5rem] rounded-full  relative flex items-center">
          <div className="flex flex-col items-start justify-center">
            <span className="mx-4 text-lg font-gluten text-purple-400">{company}</span>
            <span className="mx-4 text-white text-sm font-sora flex space-between gap-1">
              <MapPin size={17} /> <span>{location}</span>
            </span>
          </div>
          <div className="bg-purple-800 h-[4rem] w-[4rem] left-0 rounded absolute rounded-full flex flex-col align-center items-center justify-center">
            <img src={logo} alt={company} className="w-[3rem] h-[3rem] rounded-full" />
          </div>
        </button>
        <div className="bg-black mt-5 md:mt-0 font-sora text-white px-4 py-2 rounded-full text-lg font-semibold flex items-center gap-2">
          <Calendar /> <span>{period}</span>
        </div>
      </div>
      <p className="text-white text-2xl py-4 flex gap-1 font-sora flex-row items-center">
        <img src={developer} className="w-8 h-8 rounded-full mr-3" />
        <span>{role}</span>
      </p>
      {responsibilities.map((responsibility, index) => (
        <p key={index} className="text-white md:text-lg py-2 flex gap-1 font-sora">
          <Laptop /> <span>{responsibility}</span>
        </p>
      ))}
    </div>
  </div>
);

const Experiences = () => {
  return (
    <div className="bg-black my-[5rem] p-8 md:p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Experiences
        <span className="absolute -top-4 -left-7 text-purple-400/20 text-5xl md:text-7xl">Experiences</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl my-5 w-full">
        {experiencesData.map((experience, index) => (
          <ExperiencesCard key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;