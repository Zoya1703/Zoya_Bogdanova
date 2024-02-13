var services = {
    "стрижка": 60,
    "гоління": 80,
    "Миття голови": 100
};

services['Розбити скло'] = 200;

// Метод для обчислення загальної вартості послуг
services.price = function() {
    var total = 0;
    for (var key in this) {
        if (typeof this[key] === 'number') {
            total += this[key];
        }
    }
    return total;
};

// Метод для знаходження мінімальної вартості
services.minPrice = function() {
    var min = Infinity;
    for (var key in this) {
        if (typeof this[key] === 'number' && this[key] < min) {
            min = this[key];
        }
    }
    return min;
};

// Метод для знаходження максимальної вартості
services.maxPrice = function() {
    var max = -Infinity;
    for (var key in this) {
        if (typeof this[key] === 'number' && this[key] > max) {
            max = this[key];
        }
    }
    return max;
};

console.log("Загальна вартість послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуг:", services.minPrice() + " грн");
console.log("Максимальна вартість послуг:", services.maxPrice() + " грн");