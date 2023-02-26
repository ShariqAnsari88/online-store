import React from "react";

const SmallProductCard = ({ imagePath, name, price }) => {
    return (
        <div className="flex w-[266px] h-[124px] bg-white rounded-[9px]">
            <div className="w-[110px] h-full bg-[#EEEEEE] rounded-tl-[9px] rounded-bl-[9px]">
                <img
                    src={imagePath}
                    className="small-product-rotate max-w-[160px] relative top-[30px] -left-[60px]"
                />
            </div>
            <div className="text-[#121212] pt-4 pl-4 flex flex-col gap-1">
                <div className="font-medium">{name}</div>
                {/* STAR RATING START */}
                <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                        <img src="/start-black.svg" />
                        <img src="/start-black.svg" />
                        <img src="/start-black.svg" />
                        <img src="/start-black.svg" />
                        <img src="/start-black2.svg" />
                    </div>
                </div>
                {/* STAR RATING END */}
                <div className="font-oswald text-[22px] font-bold">{price}</div>
            </div>
        </div>
    );
};

export default SmallProductCard;
