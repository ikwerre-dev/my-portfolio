import React from 'react';
import { Star } from 'lucide-react';
import user from '../assets/user.png';
const testimonials = [
  {
    text: "His designing skill and programming skill is really good and very collaborative.",
    author: "Rupam karmakar",
    location: "Maharashtra, India",
    flag: "IN"
  },
  {
    text: "Nikunj delivered excellent work on the Next.js project, and I thoroughly enjoyed collaborating with him. His communication was clear, he consistently met all deadlines, and demonstrated strong skills.",
    author: "Bilal Karimbath",
    location: "Dubai, UAE",
    flag: "AE"
  },
  {
    text: "Nikunj, Thank you for all your hard work throughout this engagement. I have been very impressed and it's been a pleasure to work with you.",
    author: "Foteh Gafarov",
    location: "New York, USA",
    flag: "US"
  },
  {
    text: "Working with Nikunj has been an absolute pleasure! He's extremely skilled and efficient. I highly recommend him to anyone looking for top-notch work. His attention to detail and commitment to meeting project goals truly set him apart. A great choice for any project!",
    author: "Isaac Kadosh",
    location: "Chicago, USA",
    flag: "US"
  }
];

const TestimonialCard = ({ text, author, location, flag }) => (
  <div className="bg-white rounded-3xl p-6 flex my-5 flex-col justify-between h-full">
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-8 h-8 text-purple-400 fill-current" />
          ))}
        </div>
        <div className="bg-purple-500 flex flex-col justify-center items-center bg-opacity-50 rounded rounded-[50%] w-10 h-10">
          <img src={`https://flagcdn.com/w20/${flag.toLowerCase()}.png`} alt={flag} className="w-4 h-3 mr-1" />
        </div>

      </div>
      <p className="text-black text-lg md:text-2xl mb-4">{text}</p>
    </div>
    <div className="flex items-center">
      <img src={user} alt={author} className="w-10 h-10 rounded-full mr-3" />
      <hr />
      <div className='border-t-2 border-purple-900 pt-3 border-opacity-20 w-full'>
        <p className="text-black font-semibold">{author}</p>
        <p className="text-gray-500 text-xs flex items-center">
          <img src={`https://flagcdn.com/w20/${flag.toLowerCase()}.png`} alt={flag} className="w-4 h-3 mr-1" />
          {location}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="bg-black my-[5rem]   p-12 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-12 text-purple-400 relative">
        Testimonials
        <span className="absolute -top-4 -left-7 text-purple-400/20 text-5xl md:text-7xl">Testimonials</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl my-5 w-full">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;