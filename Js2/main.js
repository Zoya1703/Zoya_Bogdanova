var services = {
    "стрижка": '60 грн',
    "гоління": '80 грн',
    "Миття голови": '100грн' 
};

function getServicePrices() {
    return Object.values(services).map(price => parseFloat(price));
};

function calculateTotalPrice() {
    var prices = getServicePrices();
    var totalPrice = 0;
    for (var i = 0; i < prices.length; i++) {
        totalPrice += prices[i];
    }
    return totalPrice; 
}

function calculateMinPrice() {
    var prices = getServicePrices();
    var minPrice = Infinity;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return minPrice;
}

function calculateMaxPrice() {
    var prices = getServicePrices();
    var maxPrice = -Infinity;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] > maxPrice) {
            maxPrice = prices[i];
        }
    }
    return maxPrice;
}

services['Розбити скло'] = 200;
services['манікюр'] = 300;

console.log("Загальна вартість послуг: " + calculateTotalPrice() + " грн");
console.log("Мінімальна вартість послуг: " + calculateMinPrice() + " грн");
console.log("Максимальна вартість послуг: " + calculateMaxPrice() + " грн");