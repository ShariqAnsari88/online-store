import React from "react";
import Link from "next/link";

const ProductCard = () => {
    return (
        <Link
            href="/product/1"
            class="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img class="w-full" src="/product-1.webp" alt="Product Image" />
            <div class="p-4 text-black/[0.9]">
                <h2 class="text-lg font-medium">Product Name</h2>
                <div class="flex items-center text-black/[0.5]">
                    <p class="mr-2 text-lg font-semibold">$20.00</p>
                    <p class="text-base  font-medium line-through">$25.00</p>
                    <p class="ml-auto text-base font-medium text-green-500">
                        20% off
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
