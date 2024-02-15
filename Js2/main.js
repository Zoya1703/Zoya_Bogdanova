// Об'єкт зі списком послуг та їх вартістю
var services = {
    "стрижка": 100,
    "гоління": 30,
    "Миття голови": 100
};

// Додавання нової послуги
services['Розбити скло'] = 200;
console.log("Розбити скло");

services['Грязна шия'] = 200;
console.log("Грязна шия");



function totalPrice() {
    var total = 0;
    for (var key in services) {
        if (typeof services[key] === 'number') {
            total += services[key];
        }
    }
    return total;
}


function minPrice() {
    var prices = Object.values(services); 
    return Math.round(...prices);
}


function maxPrice() {
    var prices = Object.values(services); 
    return Math.round(...prices); 
}


console.log("Загальна вартість послуг:", totalPrice() + " грн");
console.log("Мінімальна вартість послуг:", minPrice() + " грн");
console.log("Максимальна вартість послуг:", maxPrice() + " грн");