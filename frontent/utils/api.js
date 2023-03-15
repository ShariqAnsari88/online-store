import { API_URL, STRAPI_API_TOKEN } from "./urls";

// This is generic data fetching method
export const fetchDataFromApi = async (endpoint, localhost) => {
    const options = {
        method: "GET",
        headers: {
            Authorization: "Bearer " + STRAPI_API_TOKEN,
        },
    };
    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();

    return data;
};

// This is post method for making stripe payment request
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
