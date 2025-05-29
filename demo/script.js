// --- Calculator Key Labels ---
const keys = [
    "AC", "%", "/", "=", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", "."
];

// --- DOM Elements ---
const input = document.getElementById('input');
const answer = document.getElementById('answer');
const keyboard = document.getElementById('keyboard');

/**
 * Creates a button element for a given key.
 * @param {string} key - The calculator key label.
 * @returns {HTMLButtonElement} - The created button element.
 */
function createKeyButton(key) {
    const button = document.createElement('button');
    button.className = "col btn btn-icon btn-secondary rounded-4";
    button.textContent = key;
    button.addEventListener('click', () => handleKeyClick(key));
    return button;
}

/**
 * Handles the click event for a key button.
 * @param {string} key - The clicked key label.
 */
function handleKeyClick(key) {
    if (key === "AC") {
        clearInput();
    } else if (key === "=") {
        evaluateExpression();
    } else {
        appendToInput(key);
    }
}

/** Clears the input field. */
function clearInput() {
    input.value = "";
    answer.innerText = "";  // Optional: Clear previous answer too
}

/** Appends the given character to the input field. */
function appendToInput(char) {
    input.value += char;
}

/** Evaluates the expression in the input field and displays the result. */
function evaluateExpression() {
    try {
        answer.innerText = eval(input.value);
    } catch {
        answer.innerText = "Error";
    }
}

/** Initializes the keyboard by creating buttons and adding them to the DOM. */
function initKeyboard() {
    if (!keyboard) {
        console.warn('Keyboard container not found.');
        return;
    }
    keys.forEach(key => {
        const button = createKeyButton(key);
        keyboard.appendChild(button);
    });
}

// --- Initialize Calculator Keyboard ---
initKeyboard();
