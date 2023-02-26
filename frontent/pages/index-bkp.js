import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import SmallProductCard from "@/components/SmallProductCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const size = [
    "UK 6",
    "UK 6.5",
    "UK 7",
    "UK 7.5",
    "UK 8",
    "UK 8.5",
    "UK 9",
    "UK 9.5",
];

export default function Home() {
    const [selectedSize, setSelectedSize] = useState(2);
    return (
        <main className="h-[100vh] flex items-center">
            <Wrapper className="flex">
                <div className="text-white w-[50%] flex flex-col justify-center relative top-[50px] 2xl:top-0">
                    {/* TITLE START */}
                    <div className="font-semibold text-[52px] leading-tight mb-5 2xl:mb-7">
                        AIR JORDAN 1 MID SE
                    </div>
                    {/* TITLE END */}

                    {/* PRICE START */}
                    <div className="font-oswald font-bold text-[48px] text-[#56AFD3] leading-tight mb-5 2xl:mb-7">
                        $123
                    </div>
                    {/* PRICE END */}

                    {/* STAR RATING START */}
                    <div className="flex items-center gap-2 mb-5 2xl:mb-7">
                        <div className="flex gap-2">
                            <img src="/start-gold.svg" />
                            <img src="/start-gold.svg" />
                            <img src="/start-gold.svg" />
                            <img src="/start-gold.svg" />
                            <img src="/start-gray.svg" />
                        </div>
                        <span>{`(5.2K)`}</span>
                    </div>
                    {/* STAR RATING END */}

                    {/* DESCRIPTION START */}
                    <div className="max-w-[594px] mb-5 2xl:mb-7">
                        The AJ1 mid remakes a classic. Bold colours and
                        contrasting textures give you a fresh look with a
                        familiar feel.
                    </div>
                    {/* DESCRIPTION END */}

                    {/* SIZE SELECTION START */}
                    <div className="flex flex-col mb-7">
                        <div className="font-semibold mb-2">Size</div>
                        <div className="flex flex-wrap gap-[7px] max-w-[350px]">
                            {size.map((size, index) => (
                                <div
                                    key={index}
                                    className={`w-[78px] h-[33px] flex justify-center items-center border border-white rounded-[4px] text-[16px] opacity-50 hover:opacity-100 cursor-pointer ${
                                        selectedSize === index
                                            ? "opacity-100"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedSize(index)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* SIZE SELECTION END */}

                    {/* BUTTONS START */}
                    <div className="flex gap-2">
                        <button className="w-[164px] h-[54px] flex justify-center items-center border-[2px] border-[#56AFD3] rounded-[4px] text-[#232323] bg-[#56AFD3] hover:opacity-75 active:scale-90 transition-all">
                            Add to Cart
                        </button>
                        <button className="w-[132px] h-[54px] flex justify-center items-center border-[2px] border-[#56AFD3] rounded-[4px] hover:opacity-75 active:scale-90 transition-all">
                            Buy Now
                        </button>
                    </div>
                    {/* BUTTONS END */}
                </div>

                {/* RIGHT COLUMN START */}
                <div className="relative w-[50%]">
                    {/* <div className="absolute -bottom-[50px] right-0 z-10 flex items-center gap-[80px]">
                        <SmallProductCard
                            imagePath="/p2-a.png"
                            name="Air Elevate"
                            price="$123"
                        />
                        <SmallProductCard
                            imagePath="/p3-a.png"
                            name="Air Elevate"
                            price="$123"
                        />
                    </div> */}
                    {/* ARROWS START */}
                    {/* <div className="flex gap-[15px] relative z-[1]">
                        <div className="w-[50px] 2xl:w-[67px] h-[50px] 2xl:h-[67px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-75">
                            <img src="/slider-arrow.svg" />
                        </div>
                        <div className="w-[50px] 2xl:w-[67px] h-[50px] 2xl:h-[67px] rounded-full bg-white flex items-center justify-center rotate-180 cursor-pointer hover:opacity-75">
                            <img src="/slider-arrow.svg" />
                        </div>
                    </div> */}
                    {/* ARROWS END */}

                    {/* PRODUCT IAMGE START */}
                    <div className="relative top-[50px] -left-[100px]">
                        <Carousel
                            showThumbs={false}
                            showIndicators={false}
                            showStatus={false}
                            renderArrowPrev={(clickHandler, hasPrev) => (
                                <div
                                    onClick={clickHandler}
                                    className="w-[50px] 2xl:w-[67px] h-[50px] 2xl:h-[67px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-75 absolute top-0 2xl:-top-[50px] -right-[40px] 2xl:-right-[20px] z-[1]"
                                >
                                    <img
                                        src="/slider-arrow.svg"
                                        className="max-w-[12px]"
                                    />
                                </div>
                            )}
                            renderArrowNext={(clickHandler, hasNext) => (
                                <div
                                    onClick={clickHandler}
                                    className="w-[50px] 2xl:w-[67px] h-[50px] 2xl:h-[67px] rounded-full bg-white flex items-center justify-center rotate-180 cursor-pointer hover:opacity-75 absolute top-0 2xl:-top-[50px] -right-[100px] z-[1]"
                                >
                                    <img
                                        src="/slider-arrow.svg"
                                        className="max-w-[12px]"
                                    />
                                </div>
                            )}
                        >
                            <div className="w-[100%] h-full p-14">
                                <img
                                    src="/p1-a.png"
                                    className="big-product-rotate"
                                />
                            </div>
                            <div className="w-[100%] h-full p-14">
                                <img
                                    src="/p1-b.png"
                                    className="big-product-rotate"
                                />
                            </div>
                            <div className="w-[100%] h-full p-14">
                                <img
                                    src="/p1-c.png"
                                    className="big-product-rotate"
                                />
                            </div>
                        </Carousel>
                    </div>
                    {/* PRODUCT IAMGE START */}

                    {/* PRODUCT PRICE START */}
                    {/* <div className="w-[217px] h-[123px] rounded-[9px] flex items-center justify-center product-price-bg font-oswald font-bold text-[58px] leading-tight absolute top-[250px] 2xl:top-[300px] right-[100px]">
                        $123
                    </div> */}
                    {/* PRODUCT PRICE END */}
                </div>
                {/* RIGHT COLUMN END */}
            </Wrapper>
        </main>
    );
}

// export async function getServerSideProps(context) {
//     const options = {
//         method: "GET",
//         headers: {
//             Authorization: "Bearer " + STRAPI_API_TOKEN,
//         },
//     };
//     const res = await fetch(`${API_URL}/api/products`, options);
//     const { data } = await res.json();

//     return {
//         props: { products: data }, // will be passed to the page component as props
//     };
// }
