function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    let discountAmount = price * discountRate;
    let finalPrice = price - discountAmount;
    return finalPrice;
}



function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    let filteredProducts = products.filter(callback);
    return filteredProducts.length === 0 ? undefined : filteredProducts;
}



function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    const sortedInventory = [...inventory].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        if (valA < valB) {
            return -1;
        }
        if (valA > valB) {
            return 1;
        }
        return 0;
    });
    return sortedInventory;
}
module.exports = { calculateDiscount, 
    filterProducts,
    sortInventory,
}