let unit = 'год'; // можна ввести 'год' або 'кг' або 'км'
let value = 10; // кількість
let result;
let output;

switch (unit) {
    case 'км':
        result = value * 1000;
        output = `${value} км це ${result} м`;
        break;
    case 'год':
        result = value * 60;
        output = `${value} год це ${result} хв`;
        break;
    case 'кг':
        result = value * 1000;
        output = `${value} кг це ${result} г`;
        break;
    default:
        output = 'Невідома одиниця виміру';
}

console.log(output);