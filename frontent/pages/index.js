export default function Home() {
    return (
        <main>
            <h1 className="font-urbanist">This is homepage</h1>
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
