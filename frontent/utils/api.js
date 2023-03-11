import { API_URL, LOCALHOST_API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint, localhost) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };

    console.log(`${API_URL}${endpoint}`);

    // Fetch data from external API
    const res = await fetch(
        `${localhost ? LOCALHOST_API_URL : API_URL}${endpoint}`,
        options
    );
    const data = await res.json();

    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();

    return data;
};
