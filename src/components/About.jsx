import { React, useState } from 'react';
import { Headphones, Car, Mountain, DollarSign, PhoneCall, Eye, EyeIcon, EyeOffIcon } from 'lucide-react';
import beachImage from '../assets/beach.jpeg';
import { FaSwimmingPool } from 'react-icons/fa';
const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-black text-white min-h-screen p-8  flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold my-12 relative">
                <span className="text-purple-400 mx-10 md:mx-0">About Me</span>
                <span className="absolute -top-4 left-0 text-purple-400/20 text-5xl md:text-6xl">About Me</span>
            </h1>

            <div className="w-full md:max-w-7xl">
                <div className="flex flex-col md:flex-row flex-wrap my-5">
                    <div className="flex flex-col md:w-1/2">
                        <div className="flex  items-center mb-8">
                            <div className="bg-purple-400 rounded-full p-2 mr-4">
                                <img src={beachImage} alt="Love icon" className="w-10 h-10 rounded-full" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mt-1 font-gluten">I Love</h2>
                        </div>

                        <div className="md:flex md:flex-wrap grid grid-cols-2 gap-5 gap-y-7 mb-12 ">
                            {[
                                { icon: <Headphones className="w-6 h-6" />, text: "Music", color: "text-[#7B3F00] font-sora" },
                                { icon: <Car className="w-6 h-6" />, text: "Travelling", color: "text-[#7B3F00] font-sora" },
                                { icon: <FaSwimmingPool className="w-6 h-6" />, text: "Swimming", color: "text-[#7B3F00] font-sora" },
                                { icon: <DollarSign className="w-6 h-6" />, text: "Money", color: "text-[#7B3F00] font-sora" },
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center bg-purple-100 rounded-full py-5 px-5 md:px-10 ${item.color}`}>
                                    <span>{item.icon}</span>
                                    <span className="ml-2 text-lg md:text-2xl  ">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-12 md:w-1/2">
                        {[
                            { number: "7.5+", text: "Years Experience" },
                            { number: "20+", text: "Project Completed" },
                        ].map((item, index) => (
                            <div key={index} className="bg-purple-900 bg-opacity-20 flex flex-col align-center justify-center items-center rounded-[3rem] p-8 text-center">
                                <h3 className="text-5xl md:text-6xl font-bold text-purple-400 mb-2 font-gluten">{item.number}</h3>
                                <p className="text-xl md:text-2xl font-sora">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white/5 rounded-3xl p-6 md:p-8 mb-5">
                    <p className="text-lg md:text-2xl leading-relaxed">
                        I'm Robinson Honour Amadi, an 18-year-old tech enthusiast with a profound passion for the digital realm. <br /> <br />I began my coding journey in 2017 and have spent the last six years immersing myself in various fields, including web development, app development, robotics, cloud computing, and game development. <br /> <br />As a self-taught programmer, I have successfully built live projects that showcase my skills and creativity, demonstrating my ability to adapt and innovate across different technologies.
                    </p>
                    {isExpanded && (
                        <>        <p className="text-lg md:text-2xl pt-5 leading-relaxed">

                            In addition to my programming endeavors, I serve as a resource personnel for Airobot in Bonny Island, where I contribute my technical expertise to advance projects and initiatives that leverage robotics in practical applications. <br /> <br />My commitment to the tech community extends beyond personal projects; I am also a dedicated tech content creator, sharing knowledge and insights through various platforms to inspire and educate others in the field.
                        </p>

                            <p className="text-lg md:text-2xl pt-5 leading-relaxed">
                                I have had the privilege of speaking at multiple tech events, including the Young Techies Festival, where I engage with fellow enthusiasts and professionals, sharing my experiences and insights. <br /> <br />These opportunities have allowed me to connect with like-minded individuals and contribute to the growth of the tech community.
                            </p>
                            <p className="text-lg md:text-2xl pt-5 leading-relaxed">
                                Driven by insatiable curiosity and a strong knack for problem-solving, I am always eager to explore new frontiers in technology and collaborate with others to push the boundaries of what is possible. <br /> <br />My journey in tech has just begun, and I am excited about the future and the innovations that lie ahead.
                            </p>
                        </>
                    )}
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={toggleExpand}
                        className="bg-transparent border-2 border-purple-400 text-purple-400 rounded-full py-3 px-6 flex items-center hover:bg-purple-400 hover:text-black transition duration-300"
                    >
                        {isExpanded ? (
                            <>
                                <EyeOffIcon className="w-5 h-5 mr-2" />
                                Hide Details
                            </>
                        ) : (
                            <>
                                <EyeIcon className="w-5 h-5 mr-2" />
                                Reveal More
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;