
//Problem-01: New Price for Eid Sale

function newPrice(currentPrice , discount ) {
    if(typeof currentPrice !== "number" || typeof discount !== "number" || discount < 0 || discount > 100 || currentPrice <= 0) {
        return "Invalid";
    }

    const newPrice = currentPrice - (currentPrice * (discount / 100));
    return newPrice.toFixed(3);
}