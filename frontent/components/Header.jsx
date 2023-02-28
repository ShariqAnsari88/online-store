import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart, BsChevronDown } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

import Wrapper from "./Wrapper";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            // if (window.scrollY > lastScrollY && !mobileMenu) {
            if (window.scrollY > lastScrollY) {
                setShow("-translate-y-[80px]"); // hide
            } else {
                setShow("shadow-sm"); // show
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 translate-y-0 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <img src="/logo.svg" className="w-[40px] md:w-[60px]" />

                {/* DESKTOP MENU START */}
                <ul className="hidden md:flex items-center gap-8 font-medium">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li
                        className="cursor-pointer flex items-center gap-2 relative"
                        onMouseEnter={() => setShowCatMenu(true)}
                        onMouseLeave={() => setShowCatMenu(false)}
                    >
                        Categories
                        <BsChevronDown size={14} />
                        {/* SUBMENU START */}
                        {showCatMenu && (
                            <ul className="bg-white absolute top-6 left-0 min-w-[200px] px-1 py-1 text-black shadow-lg">
                                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                    Jordan
                                    <span className="opacity-50 text-sm">{`(18)`}</span>
                                </li>
                                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                    Snikkers
                                    <span className="opacity-50 text-sm">{`(73)`}</span>
                                </li>
                                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                    Running shoes
                                    <span className="opacity-50 text-sm">{`(45)`}</span>
                                </li>
                                <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                    Football shoes
                                    <span className="opacity-50 text-sm">{`(9)`}</span>
                                </li>
                            </ul>
                        )}
                        {/* SUBMENU END */}
                    </li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
                {/* DESKTOP MENU END */}

                {/* MOBILE MENU START */}
                {mobileMenu && (
                    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t">
                        <li className="cursor-pointer py-4 px-5 border-b">
                            Home
                        </li>
                        <li className="cursor-pointer py-4 px-5 border-b">
                            About
                        </li>
                        <li
                            className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                            onClick={() => setShowCatMenu(!showCatMenu)}
                        >
                            <div className="flex justify-between items-center">
                                Categories
                                <BsChevronDown size={14} />
                            </div>
                            {/* SUBMENU START */}
                            {showCatMenu && (
                                <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                                    <li className="cursor-pointer py-4 px-8 border-b flex justify-between">
                                        Jordan
                                        <span className="opacity-50 text-sm">{`(18)`}</span>
                                    </li>
                                    <li className="cursor-pointer py-4 px-8 border-b flex justify-between">
                                        Snikkers
                                        <span className="opacity-50 text-sm">{`(73)`}</span>
                                    </li>
                                    <li className="cursor-pointer py-4 px-8 border-b flex justify-between">
                                        Running shoes
                                        <span className="opacity-50 text-sm">{`(45)`}</span>
                                    </li>
                                    <li className="cursor-pointer py-4 px-8 flex justify-between">
                                        Football shoes
                                        <span className="opacity-50 text-sm">{`(9)`}</span>
                                    </li>
                                </ul>
                            )}
                            {/* SUBMENU END */}
                        </li>
                        <li className="cursor-pointer py-4 px-5 border-b">
                            Contact Us
                        </li>
                    </ul>
                )}
                {/* MOBILE MENU END */}

                {/* HEADER ICONS START */}
                <div className="flex items-center gap-2">
                    {/* ICON START */}

                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            58
                        </div>
                    </div>
                    {/* ICON END */}
                    {/* ICON START */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <BsCart className="text-[15px] md:text-[20px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            5
                        </div>
                    </div>
                    {/* ICON END */}
                    {/* MOBILE MENU ICON START */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* MOBILE MENU ICON END */}
                </div>
                {/* HEADER ICONS END */}
            </Wrapper>
        </header>
    );
};

export default Header;
