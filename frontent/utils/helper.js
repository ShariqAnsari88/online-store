export const getDiscountedPricePercentage = (
    originalPrice,
    discountedPrice
) => {
    // Calculate discount amount
    const discount = originalPrice - discountedPrice;

    // Calculate discount percentage
    const discountPercentage = (discount / originalPrice) * 100;

    // Returning the calculated percentage value
    return discountPercentage.toFixed(2);
};
