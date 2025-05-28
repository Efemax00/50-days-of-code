const secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess a number between 1 and 10:");

if (parseInt(guess) === secretNumber) {
  console.log("🎉 You guessed right!");
} else {
  console.log("❌ Wrong! The number was " + secretNumber);