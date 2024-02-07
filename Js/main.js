

let year = prompt('Введіть вік'); 
if (year > 0) {
 if (year === "11" || year === "12" || year === "13"|| year === "14") {
        console.log(`${year} років!`);
    } else if (year % 10 === 1 ) {
        console.log(`${year} рік!`);
    } else if (year >= 2 && year <= 4) {
        console.log(`${year} роки!`);
    }  else if (year % 10 >= 2 && year % 10 <= 4) {
        console.log(`${year} роки!`);
    }else {
        console.log(`${year} років!`);
    }
}
else {
    console.log("Помилка.");
}
