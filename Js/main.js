// Function Declaration
/*function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += symbol;
      }
      console.log(row);
    }
  }
  
  // Виклик функції
  drawTriangle(5, '*');*/

  const drawTriangle = function(height, symbol) {
    let i = 1;
    while (i <= height) {
        let row = '';
        let j = 1;
        while (j <= i) {
            row += symbol;
            j++;
        }
        console.log(row);
        i++;
    }
};

// Виклик функції
drawTriangle(8, '>');
 

  /*function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

let base = 2;
let exponent = 2;
let result = pow(base, exponent);

console.log(result);*/ 

 