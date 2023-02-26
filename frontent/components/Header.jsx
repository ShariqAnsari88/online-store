import React from "react";

import Wrapper from "./Wrapper";

const Header = () => {
    return (
        <header className="w-full h-[80px] flex items-center justify-between">
            <Wrapper className="h-[60px] flex justify-between items-center">
                <img src="/logo.svg" className="w-[60px]" />

                <ul className="flex items-center gap-6">
                    <li className="cursor-pointer hover:opacity-50">Home</li>
                    <li className="cursor-pointer hover:opacity-50">About</li>
                    <li className="cursor-pointer hover:opacity-50">
                        Find a Store
                    </li>
                    <li className="cursor-pointer hover:opacity-50">
                        Contact Us
                    </li>
                </ul>
            </Wrapper>
        </header>
    );
};

export default Header;
