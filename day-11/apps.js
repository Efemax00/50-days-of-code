// JavaScript Implementation for Assignment 02: Even or Odd Checker
function checkNumber() {
const input = document.getElementById("numberInput");
const result = document.getElementById("ageResult");

const number = parseInt(input.value);

if (isNaN(number)) {
    result.textContent = "Please enter a valid number";
    result.style.color = "red";
  } else if (number % 2 === 0) {
    result.textContent = number + " is Even";
    result.style.color = "green";
  } else {
    result.textContent = number + " is Odd";
    result.style.color = "blue";
  }
}