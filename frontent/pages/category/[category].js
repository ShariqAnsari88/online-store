import React from "react";
import Wrapper from "@/components/Wrapper";
// import ProductCard from "@/components/ProductCard";
const Category = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* HEADING AND PARAGRAPH START */}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Running Shoes
                    </div>
                </div>
                {/* HEADING AND PARAGRAPH END */}

                {/* PRODUCTS START */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* PRODUCTS END */}
            </Wrapper>
        </div>
    );
};

export default Category;
