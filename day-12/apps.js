const water = document.querySelector('.water');
const fillBtn = document.getElementById('fillCupButton');
const emptyBtn = document.getElementById('emptyCupButton');

// Set initial water level
let waterLevel = 0; // Percentage from 0 to 100

fillBtn.addEventListener('click', () => {
    if (waterLevel < 100) {
        waterLevel += 10;
        water.style.height = `${waterLevel}%`;
    }
});

emptyBtn.addEventListener('click', () => {
    if (waterLevel > 0) {
        waterLevel -= 10;
        water.style.height = `${waterLevel}%`;
    }
});
