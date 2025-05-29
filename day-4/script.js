// Start with a counter variable set to 0
let count = 0;

//Get reference to DOM elements
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

// function to update the counter display
function updateDisplay() {
    counterDisplay.textContent = count;
}

// Add event listeners to buttons
incrementBtn.addEventListener("click" , () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click" , () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click" , () => {
    count = 0;
    updateDisplay();
});  

//Initialize display
updateDisplay();