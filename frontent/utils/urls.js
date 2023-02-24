export const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://7f29-122-161-48-217.in.ngrok.io";

export const STRAPI_API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

export const fromImageToUrl = (image) => {
    if (!image) {
        return "/vercel.svg";
    }

    if (image.url.indexOf("/") === 0) {
        return `${API_URL}${image.url}`;
    }

    return image.url;
};
