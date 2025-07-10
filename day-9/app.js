
// --- 1. Global Variables & Constants ---
const MAX_VOTES = 14;
let supportVotes = 0;
let oppositionVotes = 0;

// --- 2. DOM Element References ---
const supportBtn = document.getElementById('supportBtn');
const oppositionBtn = document.getElementById('opposeBtn');
const supportersDisplay = document.getElementById('supportersDisplay');
const oppositionDisplay = document.getElementById('oppositionDisplay');
const totalDisplay = document.getElementById('totalDisplay');
const targetDisplay = document.getElementById('targetDisplay');
const finalResult = document.getElementById('finalResult');
const voteProgress = document.getElementById('voteProgress');
const loadingMsg = document.getElementById('loadingMsg');

// --- 3. Functions ---
function updateDisplay() {
    supportersDisplay.textContent = supportVotes;
    oppositionDisplay.textContent = oppositionVotes;
    const total = supportVotes + oppositionVotes;
    totalDisplay.textContent = total;
    targetDisplay.textContent = MAX_VOTES;

    // Update progress bar width
    const percentage = (total / MAX_VOTES) * 100;
    voteProgress.style.width = `${percentage}%`;
}

function calculateAndDisplayResults() {
    if (supportVotes > oppositionVotes) {
        finalResult.textContent = "Supporters are leading!";
        finalResult.style.color = "#28a745"; // green
    } else if (oppositionVotes > supportVotes) {
        finalResult.textContent = "Opposition is leading!";
        finalResult.style.color = "#dc3545"; // red
    } else if (supportVotes === 0 && oppositionVotes === 0) {
        finalResult.textContent = "";
        loadingMsg.textContent = "All eyes on the results... Stay tuned.";
    } else {
        finalResult.textContent = "It's a tie!";
        finalResult.style.color = "#ffc107"; // yellow
        loadingMsg.textContent = "";
    }
}

function checkVoteLimit() {
    const total = supportVotes + oppositionVotes;
    if (total >= MAX_VOTES) {
        supportBtn.disabled = true;
        oppositionBtn.disabled = true;
        loadingMsg.textContent = `Voting complete. (${MAX_VOTES} votes reached)`;
    } else {
        supportBtn.disabled = false;
        oppositionBtn.disabled = false;
    }
}

function initializeVotingSystem() {
    updateDisplay();
    calculateAndDisplayResults();
    checkVoteLimit();
}

// --- 4. Event Listeners ---
supportBtn.addEventListener('click', () => {
    const total = supportVotes + oppositionVotes;
    if (total < MAX_VOTES) {
        supportVotes++;
        updateDisplay();
        calculateAndDisplayResults();
        checkVoteLimit();
    } else {
        alert(`Cannot vote, maximum of ${MAX_VOTES} votes reached!`);
    }
});

oppositionBtn.addEventListener('click', () => {
    const total = supportVotes + oppositionVotes;
    if (total < MAX_VOTES) {
        oppositionVotes++;
        updateDisplay();
        calculateAndDisplayResults();
        checkVoteLimit();
    } else {
        alert(`Cannot vote, maximum of ${MAX_VOTES} votes reached!`);
    }
});

// --- 5. Init ---
initializeVotingSystem();
