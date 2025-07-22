document.addEventListener('DOMContentLoaded', () => {
    const bulbImage = document.getElementById('bulbImage');
    const turnOnButton = document.getElementById('turnOnButton');
    const turnOffButton = document.getElementById('turnOffButton');

    // Function to update bulb state
    function updateBulbState(isOn) {
        bulbImage.src = isOn ? './bulb-on.png' : './bulb-off.png';
        turnOnButton.classList.toggle('disabled', isOn);
        turnOffButton.classList.toggle('disabled', !isOn);
    }

    // Initial state: bulb is off
    updateBulbState(false);

    // Event listener for Turn On button
    turnOnButton.addEventListener('click', () => {
        updateBulbState(true);
    });

    // Event listener for Turn Off button
    turnOffButton.addEventListener('click', () => {
        updateBulbState(false);
    });
});
