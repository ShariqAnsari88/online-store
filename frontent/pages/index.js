import { useState, useEffect } from "react";
import Image from "next/image";
const endpoint = "http://localhost:1337/api/products";
export default function Home({ products }) {
    const [data, setData] = useState(products.data);

    return (
        <main>
            <h1>This is homepage</h1>
            {data?.map((p) => {
                return <h2 key={p.id}>{p.attributes.name}</h2>;
            })}
        </main>
    );
}

export async function getServerSideProps(context) {
    const options = {
        method: "GET",
        headers: {
            Authorization:
                "Bearer 98bb191cbf9c2166f51298df4531b6f528c1047e56411916fe3fc6cc01504cefcbe69ff83cb04fe7d114b758ec1787ae9a59050d42d17373b2cc1d246c96188a9392e9dd4622b46c470e9ada6dbc733c548ccaad4bd42fa2c4a15be0d5d06090486b40ff5c05a91b5575fde7bebcb84983612f8dcc08a8993e2ebdb63c883def",
        },
    };
    const res = await fetch(
        "https://online-store-l5dq.onrender.com/api/products",
        options
    );
    const data = await res.json();

    return {
        props: { products: data }, // will be passed to the page component as props
    };
}