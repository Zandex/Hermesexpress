'use strict'
let params = process.argv.slice(2);

let num1 = parseFloat( params[0]);
let num2 = parseFloat( params[1]);

console.log("los parametros son: " + params);
console.log(num1,num2);
console.log(`la suma de los numeros es: ${num1 + num2}`);


