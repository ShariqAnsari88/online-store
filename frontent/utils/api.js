import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    console.log(`${API_URL}${endpoint}`);

    // Fetch data from external API
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};
