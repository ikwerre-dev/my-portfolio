import React from 'react';
import { Calendar, Laptop, MapPin, Star, Link2, Info, Github, GithubIcon } from 'lucide-react';
import { BiCaretRight } from 'react-icons/bi';
import launchpad from '../assets/sites/launchpad.png'
import indulgetix from '../assets/sites/indulgetix.png'
import sme from '../assets/sites/sme.png'
import portfolio from '../assets/sites/portfolio.png'
import { GrReactjs } from 'react-icons/gr';
import { DiGithub, DiNodejs } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
const ProjectCard = ({ project }) => {
  return (
    <div className={`${project.color} text-white p-6 rounded-3xl max-w-7xl mx-auto`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          {/* Add any additional header content here */}
        </div>
        <button className="bg-white rounded-full p-2">
          <Info className="w-5 h-5 text-blue-900" />
        </button>
      </div>

      <div className="mt-4 flex flex-col md:flex-row space-x-4">
        <div className="flex-1">
          <img src={project.image} alt={`${project.name} Website`} className="rounded-xl w-full" />
        </div>
        <div className="flex-1">
          <div className="mt-6">
            <h2 className="text-4xl my-2 mt-5 font-bold">{project.name}</h2>

            <h3 className="text-lg mb-2 mt-[2rem] text-center md:text-start">Project Category</h3>
            <div className="flex space-x-2">
              {project.categories.map((category, index) => (
                <span key={index} className="bg-white text-blue-900 px-6 py-2 rounded-full text-lg flex items-center space-x-1">{category}</span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg mb-2 text-center md:text-start">Technologies I used</h3>
            <div className="flex flex-wrap flex-col md:flex-row gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-white text-blue-900 px-6 py-2 rounded-full text-lg flex items-center space-x-1">
                  <span className="font-bold">{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-5">
            <a href={project.link} target='_blank' className="bg-black   hover:bg-black px-4 py-3 rounded-full flex items-center justify-between   space-x-2">
              <Link2 className="w-4 h-4" />
              <span className='text-center'>Go To {project.name}</span>
            </a>
            {
              project && project.githublink ? (
                <a href={project.githublink} target='_blank' className="bg-black   hover:bg-black px-4 py-3  rounded-full flex items-center justify-between   space-x-2">
                  <GithubIcon className="w-4 h-4" />
                  <span className='text-center'>View on Github</span>
                </a>
              ) : ''


            }
          </div>
        </div>
      </div>
    </div>
  );
};

const projectsData = [

  {
    name: 'SME Event',
    color: 'bg-purple-900 bg-opacity-50',
    image: sme,
    categories: ['Event', 'Single Page'],
    technologies: [
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'ReactJS', icon: <GrReactjs /> },
    ],
    link: 'https://sme-unwind.vercel.app/',
    githublink: 'https://github.com/ikwerre-dev/sme-unwind-Dashboard',

  },
  {
    name: 'My Portfolio',
    color: 'bg-purple-900 bg-opacity-50',
    image: portfolio,
    categories: ['Portfolio', 'Single Page'],
    technologies: [
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'ReactJS', icon: <GrReactjs /> },
    ],
    link: 'https://robinsonhonour.vercel.app/',
    githublink: 'https://github.com/ikwerre-dev/my-portfolio',

  },
  {
    name: 'Indulgetix',
    color: 'bg-purple-800 bg-opacity-50',
    image: indulgetix,
    categories: ['Event Management', 'Frontend', 'Backend'],
    technologies: [
      { name: 'Swift', icon: 'Swift' },
      { name: 'Node.js', icon: 'Node' },
      { name: 'MongoDB', icon: 'Mongo' },
    ],
    link: 'https://event.indulgetix.com/',
  },
  {
    name: 'Dittoswaps',
    color: 'bg-purple-900 bg-opacity-50',
    image: launchpad,
    categories: ['Launchpad', 'Web3'],
    technologies: [
      { name: 'Bootstrap', icon: <BsBootstrap /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'ReactJS', icon: <GrReactjs /> },
    ],
    link: 'https://web3-blush-five.vercel.app/',
    githublink: 'https://github.com/ikwerre-dev/web3',

  },
];

const Works = () => {
  return (
    <div className="bg-black my-[5rem] p-8 md:p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Works
        <span className="absolute -top-3 -left-4 text-purple-400/20 text-5xl md:text-7xl">Works</span>
      </h2>
      <div className="grid grid-cols-1  gap-6 max-w-7xl my-5 w-full">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;