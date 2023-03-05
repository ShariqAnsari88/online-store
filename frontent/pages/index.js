import Wrapper from "@/components/Wrapper";
import HomeBanner from "@/components/HomeBanner";
import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HomeBanner />
            <Wrapper>
                {/* HEADING AND PARAGRAPH START */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* HEADING AND PARAGRAPH END */}

                {/* PRODUCTS START */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products &&
                        products.data &&
                        products.data.map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))}
                </div>
                {/* PRODUCTS END */}
            </Wrapper>
        </main>
    );
}

// This gets called on every request
// export async function getServerSideProps() {
//     const products = await fetchDataFromApi("/api/products?populate=*");
//     console.log(products);
//     // Pass data to the page via props
//     return { props: { products } };
// }

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");
    // Pass data to the page via props
    return { props: { products } };
}
