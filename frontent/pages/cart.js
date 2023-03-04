import React from "react";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
const Cart = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* HEADING AND PARAGRAPH START */}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Shopping Cart
                    </div>
                </div>
                {/* HEADING AND PARAGRAPH END */}

                {/* CART CONTENT START */}
                <div className="flex flex-col lg:flex-row gap-12 py-10">
                    {/* CART ITEMS START */}
                    <div className="flex-[2]">
                        <div className="text-lg font-bold">Cart Items</div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    {/* CART ITEMS END */}

                    {/* SUMMARY START */}
                    <div className="flex-[1]">
                        <div className="text-lg font-bold">Summary</div>

                        <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                            {/* ROW START */}
                            <div className="flex justify-between">
                                {/* HEADING */}
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Subtotal
                                </div>

                                {/* PRICE */}
                                <div className="text-md md:text-lg font-medium text-black">
                                    ₹ 19 695.00
                                </div>
                            </div>
                            {/* ROW END */}

                            {/* MSG */}
                            <div className="text-sm md:text-md py-5 border-t mt-5">
                                The subtotal reflects the total price of your
                                order, including duties and taxes, before any
                                applicable discounts. It does not include
                                delivery costs and international transaction
                                fees.
                            </div>
                        </div>

                        {/* BUTTON START */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Checkout
                        </button>
                        {/* BUTTON END */}
                    </div>
                    {/* SUMMARY END */}
                </div>
                {/* CART CONTENT END */}
            </Wrapper>
        </div>
    );
};

export default Cart;
