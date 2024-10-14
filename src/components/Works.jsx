import React from 'react';
import { Calendar, Laptop, MapPin, Star, Link2, Info, Github, GithubIcon, Link2Icon, Briefcase } from 'lucide-react';
import { BiCaretRight } from 'react-icons/bi';
import launchpad from '../assets/sites/launchpad.png'
import indulgetix from '../assets/sites/indulgetix.png'
import sme from '../assets/sites/sme.png'
import portfolio from '../assets/sites/portfolio.png'
import veefa from '../assets/sites/veefa.png'
import { GrReactjs } from 'react-icons/gr';
import { DiGithub, DiJqueryLogo, DiNodejs } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { FaNodeJs } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { MdPhp } from 'react-icons/md';
const ProjectCard = ({ project }) => {
  return (
    <div className={`${project.color} text-white p-6 rounded-3xl max-w-7xl mx-auto`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
        </div>
        <a href={project.link}
          target="_blank"
          rel="noopener noreferrer" className="bg-white rounded-full p-2">
          <Link2Icon className="w-5 h-5 text-blue-900" />
        </a>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} Website`}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold font-gluten mb-6">{project.name}</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold font-gluten mb-1">Project Category</h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span key={index} className="bg-white text-blue-900 py-2 px-3 md:px-4 md:py-2 rounded-full text-sm md:text-lg flex items-center space-x-2">
                      <span className="font-bold"><Briefcase size={15} /></span>
                      <span>{category}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold font-gluten mb-1">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-white text-blue-900 py-2 px-3 md:px-4 md:py-2 rounded-full text-sm md:text-lg flex items-center space-x-2">
                      <span className="font-bold">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white hover:bg-gray-800 w-full py-2 px-3 md:px-4 md:py-2 rounded-full text-lg rounded-full flex items-center justify-center space-x-2 transition duration-300"
              >
                <Link2 className="w-5 h-5" />
                <span>View</span>
              </a>
              {project.githublink && (
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white hover:bg-gray-800 w-full  py-2 px-3 md:px-4 md:py-2 rounded-full text-lg rounded-full flex items-center justify-center space-x-2 transition duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
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
    name: 'Veefa',
    color: 'bg-purple-900 bg-opacity-50',
    image: veefa,
    categories: ['MarketPlace', 'MultiVendor'],
    technologies: [
      { name: 'Bootstrap', icon: <BsBootstrap /> },
      { name: 'PHP', icon: <MdPhp /> },
      { name: 'Jquery', icon: <DiJqueryLogo /> },
    ],
    link: 'https://veefa.co/',
 
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
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'ReactJS', icon: <GrReactjs /> },
      { name: 'PHP', icon: <MdPhp /> },
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
    <div className="bg-black my-[5rem] p-8 md:p-12 flex flex-col items-center justify-center" id='works'>
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