function calculateAge() {
const input = document.getElementById("yearOfBirth");
const result = document.getElementById("ageResult");

const birthYear = parseInt(input.value);
const currentYear = new Date().getFullYear();

if (!birthYear || birthYear > currentYear || birthYear < 1900) {
    result.textContent = "Please enter a valid year (e.g. 1998)";
    result.style.color = "red";
  } else {
    const age = currentYear - birthYear;
    result.textContent = age + " years old";
    result.style.color = "green";
  }
}