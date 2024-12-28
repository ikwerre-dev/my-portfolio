import React, { useState } from "react";
import {
  Calendar,
  Laptop,
  MapPin,
  Star,
  Link2,
  Info,
  Github,
  GithubIcon,
  Link2Icon,
  Briefcase,
} from "lucide-react";
import {
  BiCaretRight,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import launchpad from "../assets/sites/launchpad.png";
import indulgetix from "../assets/sites/indulgetix.png";
import sme from "../assets/sites/sme.png";
import portfolio from "../assets/sites/portfolio.png";
import uncutxtra from "../assets/sites/uncutxtra.png";
import myticketseller from "../assets/sites/myticketseller.png";
import veefa from "../assets/sites/veefa.png";
import formNavigator from "../assets/sites/form-navigator.png";
import toastLibrary from "../assets/sites/toast.png";
import clanshare from "../assets/sites/clanshare.png";
import photography from "../assets/sites/photography.png";
import cryptowalletapp from "../assets/sites/cryptowalletapp.png";
import { GrReactjs } from "react-icons/gr";
import { DiGithub, DiJqueryLogo, DiNodejs } from "react-icons/di";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpo, SiJavascript, SiRsocket, SiTailwindcss } from "react-icons/si";
import { MdPhp } from "react-icons/md";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`${project.color} text-white p-6 rounded-3xl max-w-7xl mx-auto`}
    >
      <div className="hidden md:flex justify-between items-start">
        <div className="flex items-center space-x-2"></div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2"
        >
          <Link2Icon className="w-5 h-5 text-blue-900" />
        </a>
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col gap-8">
          <div className="lg:full">
            <div className="aspect-w-16 w-full md:h-[20rem] aspect-h-9 rounded-xl overflow-hidden">
            
              <ShimmerImage
                src={project.image}
                alt={project.name}
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="lg:full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl  font-bold font-luckiest-guy mb-6">
                {project.name}
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold  mb-2">
                  Project Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-white text-blue-900 py-2 px-3 md:px-4 md:py-2 rounded-full text-sm md:text-lg flex items-center space-x-2"
                    >
                      <span className="font-bold">
                        <Briefcase size={15} />
                      </span>
                      <span>{category}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold  mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white text-blue-900 py-2 px-3 md:px-4 md:py-2 rounded-full text-sm md:text-lg flex items-center space-x-2"
                    >
                      <span className="font-bold">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-5">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white hover:bg-gray-800 w-full py-2 px-3 md:px-4 md:py-2 rounded-full text-lg rounded-full flex items-center justify-center space-x-2 transition duration-300"
                >
                  <Link2 className="w-5 h-5" />
                  <span>View</span>
                </a>
              )}
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
    name: "Photography Website",
    color: "bg-purple-900 bg-opacity-50",
    image: photography,
    categories: ["JavaScript", "Frontend"],
    technologies: [
      { name: "Tailwind", icon: <BiLogoTailwindCss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Javascript", icon: <SiJavascript /> },
    ],
    link: "https://photography-app-topaz.vercel.app/",
    githublink: "https://github.com/ikwerre-dev/Photography-app",
  },
  {
    name: "React.js Toast Library",
    color: "bg-purple-900 bg-opacity-50",
    image: toastLibrary,
    categories: ["Library", "JavaScript", "Frontend"],
    technologies: [
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Javascript", icon: <SiJavascript /> },
    ],
    link: "https://www.npmjs.com/package/robinson-reactjs-toast",
    githublink: "https://github.com/ikwerre-dev/React-JS-Toast",
  },
  {
    name: "Form Validator Library",
    color: "bg-purple-900 bg-opacity-50",
    image: formNavigator,
    categories: ["Library", "TypeScript", "Frontend"],
    technologies: [
      { name: "TypeScript", icon: <BiLogoTypescript /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Javascript", icon: <SiJavascript /> },
    ],
    link: "https://www.npmjs.com/package/robinson-form-validator",
    githublink: "https://github.com/ikwerre-dev/Form-Validator-Library",
  },
  {
    name: "UncutXtra Awards Site",
    color: "bg-purple-900 bg-opacity-50",
    image: uncutxtra,
    categories: ["Event", "Award Page", "Frontend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
    ],
    link: "https://uncutxtra.vercel.app",
  },
  {
    name: "My TicketSeller",
    color: "bg-purple-900 bg-opacity-50",
    image: myticketseller,
    categories: ["Event", "Single Page", "Frontend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
    ],
    link: "https://myticketseller.com",
  },
  {
    name: "SME Event",
    color: "bg-purple-900 bg-opacity-50",
    image: sme,
    categories: ["Event", "Single Page", "Frontend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
    ],
    link: "https://sme-unwind.vercel.app/",
    githublink: "https://github.com/ikwerre-dev/sme-unwind-Dashboard",
  },
  {
    name: "Veefa",
    color: "bg-purple-900 bg-opacity-50",
    image: veefa,
    categories: ["MarketPlace", "MultiVendor", "Frontend", "Backend"],
    technologies: [
      { name: "Bootstrap", icon: <BsBootstrap /> },
      { name: "PHP", icon: <MdPhp /> },
      { name: "Jquery", icon: <DiJqueryLogo /> },
    ],
    link: "https://veefa.co/",
  },
  {
    name: "My Portfolio",
    color: "bg-purple-900 bg-opacity-50",
    image: portfolio,
    categories: ["Portfolio", "Single Page", "Frontend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
    ],
    link: "https://robinsonhonour.vercel.app/",
    githublink: "https://github.com/ikwerre-dev/my-portfolio",
  },
  {
    name: "Indulgetix",
    color: "bg-purple-800 bg-opacity-50",
    image: indulgetix,
    categories: ["Event Management", "Frontend", "Backend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
      { name: "PHP", icon: <MdPhp /> },
    ],
    link: "https://event.indulgetix.com/",
  },
  {
    name: "Clan Share",
    color: "bg-purple-900 bg-opacity-50",
    image: clanshare,
    categories: ["File Sharing", "Tunnel", "Frontend", "Backend"],
    technologies: [
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
      { name: "PHP", icon: <MdPhp /> },
    ],
    link: "https://clanshare.vercel.app/",
    githublink: "https://github.com/ikwerre-dev/clanshare",
  },
  {
    name: "Cryto Wallet APP",
    color: "bg-purple-900 bg-opacity-50",
    image: cryptowalletapp,
    categories: ["Mobile App", "Mobile", "Web3", "Frontend"],
    technologies: [
      { name: "Expo", icon: <SiExpo /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "React Native", icon: <GrReactjs /> },
    ],
    githublink: "https://github.com/ikwerre-dev/cryptowallet",
  },
  {
    name: "Dittoswaps",
    color: "bg-purple-900 bg-opacity-50",
    image: launchpad,
    categories: ["Launchpad", "Web3", "Frontend"],
    technologies: [
      { name: "Bootstrap", icon: <BsBootstrap /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "ReactJS", icon: <GrReactjs /> },
    ],
    link: "https://web3-blush-five.vercel.app/",
    githublink: "https://github.com/ikwerre-dev/web3",
  },
];
const Categories = [
  "All",
  "Library",
  "Mobile",
  "Frontend",
  "Backend",
  "Extensions",
];
const ShimmerImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse">
          <div
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 2s infinite linear",
            }}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryCounts = projectsData.reduce(
    (acc, project) => {
      project.categories.forEach((category) => {
        acc[category] = (acc[category] || 0) + 1;
      });
      return acc;
    },
    { All: projectsData.length } 
  );

  const toggleCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.categories.includes(selectedCategory)
        );

  return (
    <div
      className="bg-black my-[5rem] p-6 md:p-12 flex flex-col items-center justify-center"
      id="works"
    >
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Works
        <span className="absolute -top-3 -left-4 text-purple-400/20 text-5xl md:text-7xl">
          Works
        </span>
      </h2>
      <div className="flex mb-5 gap-5 flex-wrap justify-center">
        {Categories.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`
              ${selectedCategory === category ? "border-2 border-purple-400 bg-purple-400 text-black" : "bg-transparent border-2 border-purple-400 text-purple-400"}
              rounded-full py-3 px-6 flex items-center
              hover:bg-purple-400 hover:text-black transition duration-300`}
          >
            {category} ({categoryCounts[category] || 0})
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2  gap-6 max-w-7xl my-5 w-full">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
