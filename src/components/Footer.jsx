import { Menu, Sun } from "lucide-react";

function Footer() {
    return (
        <div className="w-full flex flex-col  items-center">
             <footer className="flex md:w-3/4 justify-between mx-5 md:mx-0 items-center py-2 md:py-3 px-3 md:px-3 text-white bg-purple-500 mb-8 md:mb-10 rounded rounded-[5rem]">
                 
                <button className="bg-purple-500 text-black pl-2 py-2 h-[4rem]  md:h-[4rem] pl-[2.5rem] md:pl-[3.5rem] rounded-full relative flex items-center">
                    <span className="mx-4 text-sm md:text-2xl text-black font-gluten">ROBINSON HONOUR</span>
                    <div className="bg-black font-gluten pt-1 text-white text-lg md:text-2xl h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem] left-0 rounded absolute rounded-full flex align-center items-center justify-center">
                        RH
                    </div>
                </button>
                <div className="flex items-center">

                <span className="mx-4 text-sm md:text-2xl text-black font-gluten">Designed and Built by Robinson Honour</span>
                </div>
            </footer>
        </div>

    )
}

export default Footer;