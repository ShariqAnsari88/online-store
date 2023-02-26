import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";

const HomeBanner = () => {
    return (
        <div className="relative text-white text-[20px]">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-0 top-0 w-[50px] h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div
                        onClick={clickHandler}
                        className="absolute left-[51px] top-0 w-[50px] h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
                    >
                        <BiArrowBack className="rotate-180" />
                    </div>
                )}
            >
                <img src="/slide-1.png" />
                <img src="/slide-2.png" />
                <img src="/slide-3.png" />
            </Carousel>
        </div>
    );
};

export default HomeBanner;
