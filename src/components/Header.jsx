import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenuOpen]);

    return (
        <div className="w-full flex flex-col items-center z-30  sticky top-3  mt-8 md:mt-10" id='header'>
            <header className="flex md:w-3/4 justify-between mx-4 z-40 md:mx-0 items-center py-2 md:py-3 px-3 md:px-3 text-white bg-white rounded rounded-[5rem] relative">
                <button className="bg-white text-black pl-2 py-2 h-[4rem] md:h-[4rem] pl-[2.5rem] md:pl-[3.5rem] rounded-full relative flex items-center">
                    <span className="mx-4 text-sm md:text-2xl text-black font-gluten">ROBINSON HONOUR</span>
                    <div className="bg-black font-gluten pt-1 text-white text-lg md:text-2xl h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem] left-0 rounded absolute rounded-full flex align-center items-center justify-center">
                        RH
                    </div>
                </button>
                <div className="flex items-center">
                    <button 
                        onClick={toggleMenu}
                        className="bg-black text-black pl-2 py-2 h-[3rem] md:h-[4rem] pr-[2.5rem] md:pr-[3.5rem] rounded-full relative flex items-center z-10"
                    >
                        <span className="mx-4 text-white text-sm md:text-lg font-sora">
                            {isMenuOpen ? 'Close' : 'Menu'}
                        </span>
                        <div className="bg-purple-800 h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem] right-0 rounded absolute rounded-full flex align-center items-center justify-center">
                            {isMenuOpen ? (
                                <X className="md:w-[1.6rem] text-white w-[1.4rem] md:h-[1.6rem] h-[1.4rem]" />
                            ) : (
                                <Menu className="md:w-[1.6rem] text-white w-[1.4rem] md:h-[1.6rem] h-[1.4rem]" />
                            )}
                        </div>
                    </button>
                </div>
            </header>
            <div 
                className={`fixed top-0 right-0 w-full h-0 bg-purple-800 rounded-full transition-all z-30 duration-300 ease-in-out flex flex-col items-center justify-center ${
                    isMenuOpen ? 'h-screen rounded-none' : ''
                }`}
                style={{
                    clipPath: isMenuOpen
                        ? 'circle(150% at 95% 3.5rem)'  
                        : 'circle(0% at 95% 3.5rem)',  
                }}
            >
                {isMenuOpen && (
                    <nav className="text-white text-2xl space-y-4">
                        <a href="#banner" onClick={toggleMenu} className="block hover:text-purple-300 font-gluten transition-colors">Home</a>
                        <a href="#about" onClick={toggleMenu} className="block hover:text-purple-300 font-gluten transition-colors">About</a>
                        <a href="#works" onClick={toggleMenu} className="block hover:text-purple-300 font-gluten transition-colors">My Works</a>
                        <a href="#contact" onClick={toggleMenu} className="block hover:text-purple-300 font-gluten transition-colors">Contact</a>
                    </nav>
                )}
            </div>
        </div>
    );
}

export default Header;
