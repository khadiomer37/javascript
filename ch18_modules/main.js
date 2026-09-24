// main.js

import { add, subtract, multiply, divide } from "./maths.js";

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  result.textContent = add(Number(number1.value), Number(number2.value));
});

document.getElementById("subtract").addEventListener("click", () => {
  result.textContent = subtract(Number(number1.value), Number(number2.value));
});

document.getElementById("multiply").addEventListener("click", () => {
  result.textContent = multiply(Number(number1.value), Number(number2.value));
});

document.getElementById("divide").addEventListener("click", () => {
  result.textContent = divide(Number(number1.value), Number(number2.value));
});
