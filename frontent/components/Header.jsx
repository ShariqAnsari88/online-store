import { useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart, BsChevronDown } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

import Wrapper from "./Wrapper";

const Header = () => {
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
            className={`w-full h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 translate-y-0 ${show}`}
        >
            <Wrapper className="h-[60px] flex justify-between items-center">
                <img src="/logo.svg" className="w-[60px]" />

                {/* MENU START */}
                <ul className="flex items-center gap-8 font-medium">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li
                        className="cursor-pointer flex items-center gap-2 relative"
                        onMouseEnter={() => setShowCatMenu(true)}
                        onMouseLeave={() => setShowCatMenu(false)}
                    >
                        Categories
                        <BsChevronDown size={14} />
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
                    </li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
                {/* MENU END */}

                {/* HEADER ICONS START */}
                <div className="flex items-center gap-2">
                    {/* <div class="flex items-center gap-2 h-11 w-[200px] rounded-[25px] px-4 bg-black/[0.025]">
                        <BiSearch size={20} className="shrink-0" />
                        <input
                            class="text-lg bg-transparent outline-none grow"
                            type="search"
                            name="search"
                            placeholder="Search"
                            autoComplete="off"
                        />
                    </div> */}
                    <div className="w-12 h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty size={24} />
                        <div className="h-[18px] min-w-[18px] px-[5px] rounded-full bg-red-600 absolute top-1 left-7 text-white text-[12px] flex justify-center items-center">
                            18
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <BsCart size={20} />
                        <div className="h-[18px] min-w-[18px] rounded-full bg-red-600 absolute top-1 left-7 text-white text-[12px] flex justify-center items-center">
                            5
                        </div>
                    </div>
                </div>
                {/* HEADER ICONS END */}
            </Wrapper>
        </header>
    );
};

export default Header;
