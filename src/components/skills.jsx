import { Experience } from ".";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/data";

const Skills = () => {
  const [sectionRef] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  return (
    <section className="relative py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#170928] via-[#170928]/80 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.2em] uppercase mb-4 block font-medium">Expertise</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Technical Proficiency
          </h2>
          <div className="h-[1px] w-16 bg-[#6f1cd7] opacity-50 mb-8" />
          <p className="text-[#FFFFFF99] text-lg max-w-2xl font-light leading-relaxed">
            A comprehensive toolkit refined through years of practical experience
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(111, 28, 215, 0.1)'
              }}
              className="group relative bg-[#170928]/80 backdrop-blur-sm border border-[#ffffff08] p-6 transition-all duration-300"
            >
              <div className="relative z-10">
                <p className="text-white font-medium tracking-wide mb-2">
                  {skill.title}
                </p>
                <div className="h-[1px] w-8 bg-[#6f1cd7]/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Skills;
