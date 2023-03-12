import React, { useEffect } from "react";
import { useState } from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import useSWR from "swr";
import { useRouter } from "next/router";

const maxResultCount = 6;

const Category = ({ category, products, slug }) => {
    const [pageIndex, setPageIndex] = useState(1);
    const { query } = useRouter();

    // On category page url change setting pageIndex 1
    useEffect(() => {
        setPageIndex(1);
    }, [query]);

    const { data, error, isLoading } = useSWR(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResultCount}`,
        (url) => fetchDataFromApi(url, true),
        {
            fallbackData: products,
        }
    );

    return (
        <div className="w-full md:py-20 relative">
            <Wrapper>
                {/* HEADING AND PARAGRAPH START */}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category?.data?.[0]?.attributes?.name}
                    </div>
                </div>
                {/* HEADING AND PARAGRAPH END */}

                {/* PRODUCTS START */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {data?.data?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {/* PRODUCTS END */}

                {/* PAGINATION BUTTONS START */}
                {data.meta.pagination.total > maxResultCount && (
                    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={pageIndex === 1}
                            onClick={() => setPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="font-bold">{`${pageIndex} of ${
                            data && data.meta.pagination.pageCount
                        }`}</span>

                        <button
                            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                            disabled={
                                pageIndex ===
                                (data && data.meta.pagination.pageCount)
                            }
                            onClick={() => setPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
                )}
                {/* PAGINATION BUTTONS END */}
                {isLoading && (
                    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                        <img src="/logo.svg" width={150} />
                        <span className="text-2xl font-medium">Loading...</span>
                    </div>
                )}
            </Wrapper>
        </div>
    );
};

export default Category;

export async function getStaticPaths() {
    const categories = await fetchDataFromApi("/api/categories?populate=*");

    const paths = categories.data.map((cat) => ({
        params: {
            slug: cat.attributes.slug,
        },
    }));

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps({ params: { slug } }) {
    const category = await fetchDataFromApi(
        `/api/categories?filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
        `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=1&pagination[pageSize]=${maxResultCount}`
    );

    return {
        props: {
            category,
            products,
            slug,
        },
    };
}
