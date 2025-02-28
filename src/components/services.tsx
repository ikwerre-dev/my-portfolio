'use client'
import { motion } from "framer-motion";
import {
    Smartphone,
    BotIcon,
    Palette,
    Cloud,
    Code,
    Server
} from 'lucide-react';

const services = [
    {
        id: 1,
        title: "FRONTEND DEVELOPMENT",
        description: "Crafting responsive and interactive web applications using React, Next.js, and TypeScript. Focusing on modern UI/UX practices and optimal performance.",
        icon: Code,
        category: "Development"
    },
    {
        id: 2,
        title: "BACKEND DEVELOPMENT",
        description: "Building robust server-side applications and APIs using Node.js, Python, and database technologies. Ensuring scalability and security.",
        icon: Server,
        category: "Development"
    },
    {
        id: 3,
        title: "APP DEVELOPMENT",
        description: "Developing cross-platform mobile applications and desktop software solutions that deliver seamless user experiences across different devices.",
        icon: Smartphone,
        category: "Mobile"
    },
    {
        id: 4,
        title: "ROBOTICS ENGINEERING",
        description: "Creating and programming robotic systems, specializing in automation and control systems as a resource personnel for Airobot in Bonny Island.",
        icon: BotIcon,
        category: "Engineering"
    },
    {
        id: 5,
        title: "UI DESIGN",
        description: "Crafting intuitive and visually appealing user interfaces with a focus on user-centered design principles and modern design trends.",
        icon: Palette,
        category: "Design"
    },
    {
        id: 6,
        title: "CLOUD COMPUTING",
        description: "Implementing and managing cloud solutions, leveraging services for scalable and efficient application deployment and infrastructure management.",
        icon: Cloud,
        category: "Infrastructure"
    }
];


const Services = () => {
    return (
        <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 " />

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-5"
                >
                    <h1 className="text-2xl md:text-3xl font-clashbold text-white mb-6 tracking-tight">
                        Services
                        <span className="inline-block ml-4 transform hover:scale-110 transition-transform">🔥</span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mb-6" />
                    <p className="text-[#FFFFFF99] text-base md:text-l ">
                        Specialized in multiple domains of software and hardware engineering
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: service.id * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                translateY: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                            }}
                            className="group relative bg-[#170928]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-purple-500" strokeWidth={1.5} />
                                    </span>
                                    <div className="h-px w-16 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                                </div>

                                <h3 className="text-white text-xl  font-clashbold mb-4 tracking-wide">
                                    {service.title}
                                </h3>

                                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            <div className="h-[2px] w-full bg-gradient-to-r from-purple-500/50 to-blue-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
