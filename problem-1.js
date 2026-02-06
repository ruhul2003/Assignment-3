
function newPrice(currentPrice , discount ) {
    if(typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }

    const newPrice = currentPrice - (currentPrice * (discount / 100));
    return newPrice.toFixed(3);
}
