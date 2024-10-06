import { Menu, Sun } from "lucide-react";

function Header() {
    return (
        <div className="w-full flex flex-col  items-center">
            <header className="flex w-3/4 justify-between items-center py-3 px-3 text-white bg-white mt-10 rounded rounded-[5rem]">
                 
                <button className="bg-white text-black pl-2 py-2 h-[4rem] pl-[3.5rem] rounded-full relative flex items-center">
                    <span className="mx-4 text-2xl text-black font-roboto">ROBINSON HONOUR</span>
                    <div className="bg-black text-white text-2xl h-[4rem] w-[4rem] left-0 rounded absolute rounded-full flex align-center items-center justify-center">
                        RH
                    </div>
                </button>
                <div className="flex items-center">

                    <button className="bg-black text-black pl-2 py-2 h-[4rem] pr-[3.5rem] rounded-full relative flex items-center">
                        <span className="mx-4 text-white font-sora">Menu</span>
                        <div className="bg-purple-800 h-[4rem] w-[4rem] right-0 rounded absolute rounded-full flex align-center items-center justify-center">
                            <Menu className="w-[1.6rem] h-[1.6rem]" />
                        </div>
                    </button>
                </div>
            </header>
        </div>

    )
}

export default Header;