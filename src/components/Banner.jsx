import React from 'react';
import { Download } from 'lucide-react';
import BannerImage from '../assets/bg-vector.svg';
import BannerImage2 from '../assets/home-bg.png';
import BannerMe from '../assets/banner-me.png';
import js from '../assets/icons/js.png';
import figma from '../assets/icons/figma.png';
import graphql from '../assets/icons/graphql.png';
import nextjs from '../assets/icons/nextjs.png';
import tailwind from '../assets/icons/tailwind.png';
import reactjs from '../assets/icons/reactjs.png';

const SkillTag = ({ skill, style }) => (
    <div
        className={`absolute bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center transform -translate-y-1/2 }`}
        style={[style, skill.class]}
    >
        {skill.icon && <img src={skill.icon} alt={skill.name} className={`w-12 h-12 mr-2 `} />}
        {skill.name}
    </div>
);


const Banner = () => {
    const skills = [
        { name: 'NextJS', icon: graphql, class: '' },
        { name: 'Tailwind CSS', icon: graphql, class: 'left:5rem' },
        { name: 'ReactJS', icon: graphql, class: '' },
        { name: 'JavaScript', icon: graphql, class: '' },
        { name: 'GraphQL', icon: graphql, class: '' },
        { name: 'Figma', icon: graphql, class: '' },
    ];

    const leftSkills = skills.slice(0, Math.ceil(skills.length / 2));
    const rightSkills = skills.slice(Math.ceil(skills.length / 2));

    const getSkillPositions = (skills, isLeft) => {
        return skills.map((skill, index) => ({
            ...skill,
            style: {
                [isLeft ? 'left' : 'right']: '10%',
                top: `${(index + 1) * (100 / (skills.length + 1))}%`,
            },
        }));
    };

    const leftSkillsWithPositions = getSkillPositions(leftSkills, true);
    const rightSkillsWithPositions = getSkillPositions(rightSkills, false);


    return (
        <div className="relative bg-black text-white h-[53rem] py-16 px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={BannerImage2} alt="Background" className="w-full h-full object-contain opacity-30 mt-[8rem]" />
            </div>
            <div className="relative z-10 flex flex-col items-center mt-5 max-w-5xl mx-auto">
                <h1 className="text-[4rem] font-bold font-gluten mb-4 bg-purple-400 px-5 rounded rounded-[3rem]  border-purple-900 border-4">
                    I'm <span className="text-purple-600">Robinson Honour</span>
                </h1>
                <p className="text-2xl mb-6 font-sora">
                    A Software Developer | Robotics Engineer
                    <span className="ml-4 bg-purple-500 text-black px-3 py-1 rounded-full text-sm">
                        7.5+ Years Experience
                    </span>
                </p>
                <div className="flex space-x-4 my-5">
                    <button className="bg-transparent border border-purple-500 text-purple-500 px-6 py-2 rounded-full flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        Resume
                    </button>
                    <button className="bg-purple-500 text-black px-6 py-2 rounded-full">
                        Hire Me
                    </button>
                </div>
                <div className="relative">
                    <img src={BannerMe} className='w-3/4 mx-auto mt-5' alt="Robinson Honour" />
                    {leftSkillsWithPositions.map((skill) => (
                        <SkillTag key={skill.name} skill={skill} style={skill.style} />
                    ))}
                    {rightSkillsWithPositions.map((skill) => (
                        <SkillTag key={skill.name} skill={skill} style={skill.style} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;