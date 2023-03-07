import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { udpateCart, removeFromCart } from "@/store/cartSlice";

const CartItem = ({ data }) => {
    const p = data.attributes;

    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        let payload = {
            key,
            val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(udpateCart(payload));
    };

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src={p.thumbnail.data.attributes.url}
                    width={120}
                    height={120}
                    alt={p.name}
                />
            </div>
            {/* IMAGE END */}

            {/* DETAILS START */}
            <div className="w-full flex flex-col">
                {/* ROW START */}
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p.name}
                    </div>

                    {/* PRODUCT TITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#8377;{p.price}
                    </div>
                </div>

                {/* PRODUCT TITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {p.subtitle}
                </div>

                {/* ROW START */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        {/* SIZE SELECTION START */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize")
                                }
                            >
                                {p.size.data.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item.size}
                                            disabled={
                                                !item.enabled ? true : false
                                            }
                                            selected={
                                                data.selectedSize === item.size
                                            }
                                        >
                                            {item.size}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {/* SIZE SELECTION END */}

                        {/* QUANTITY SELECTION START */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {/* QUANTITY SELECTION END */}
                    </div>
                    <RiDeleteBin6Line
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                        onClick={() => {
                            dispatch(removeFromCart({ id: data.id }));
                        }}
                    />
                </div>
            </div>
            {/* DETAILS END */}
        </div>
    );
};

export default CartItem;
