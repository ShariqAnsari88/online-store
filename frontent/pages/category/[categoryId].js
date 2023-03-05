import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";

const Category = ({ category, products }) => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* HEADING AND PARAGRAPH START */}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.data?.attributes?.name}
                    </div>
                </div>
                {/* HEADING AND PARAGRAPH END */}

                {/* PRODUCTS START */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {/* PRODUCTS END */}
            </Wrapper>
        </div>
    );
};

export default Category;

export async function getStaticPaths() {
    const categories = await fetchDataFromApi("/api/categories?populate=*");

    const paths = categories.data.map((cat) => ({
        params: {
            categoryId: cat.id.toString(),
        },
    }));

    console.log("Categories path: ", paths);

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params: { categoryId } }) {
    console.log("categoryId", categoryId);
    const category = await fetchDataFromApi(`/api/categories/${categoryId}`);
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][id]=${categoryId}`
    );

    return {
        props: {
            category,
            products,
        },
    };
}
