// State Tracking Parameters
let card1Cleared = false;
let card2Cleared = false;
let card3Cleared = false;

// 🔒 THE LOGIC ENGINE
const targetAnswers = {
    // Card 1
    q1: "latto - onnat", 
    q2: "9am",
    q3: "lays salted chips",
    q4: "night owl",
    q5: "black",
    q6: "the mentalist",
    q7: "japan",

    // Card 2
    q8: "😭",
    q9: "voice notes",
    q10: "people making promises they can't keep",
    q11: "youtube",
    q12: "savory treats",
    q13: "make up",
    q14: "spring",

    // Card 3
    q15: "6",
    q16: "accounting",
    q17: "the deep ocean",
    q18: "tea",
    q19: "both",
    q20: "nothing",
    q21: "supportive",
    q22: "pray"
};

// HELPER: Normalizes inputs to remove extra spacing/casing issues
function getInputValue(id) {
    return document.getElementById(id).value.trim().toLowerCase();
}

// Verification Processes
function verifyCard1() {
    if (getInputValue('q1') === targetAnswers.q1 &&
        getInputValue('q2') === targetAnswers.q2 &&
        getInputValue('q3') === targetAnswers.q3 &&
        getInputValue('q4') === targetAnswers.q4 &&
        getInputValue('q5') === targetAnswers.q5 &&
        getInputValue('q6') === targetAnswers.q6 &&
        getInputValue('q7') === targetAnswers.q7) {
        
        card1Cleared = true;
        document.getElementById('card1').classList.add('card-verified');
        document.getElementById('status1').innerText = "✅ STATUS: ALIBI VERIFIED";
        checkGlobalStatus();
    } else {
        alert("Verification Failure: Discrepancies detected in Alibi logs.");
    }
}

function verifyCard2() {
    if (getInputValue('q8') === targetAnswers.q8 &&
        getInputValue('q9') === targetAnswers.q9 &&
        getInputValue('q10') === targetAnswers.q10 &&
        getInputValue('q11') === targetAnswers.q11 &&
        getInputValue('q12') === targetAnswers.q12 &&
        getInputValue('q13') === targetAnswers.q13 &&
        getInputValue('q14') === targetAnswers.q14) {
        
        card2Cleared = true;
        document.getElementById('card2').classList.add('card-verified');
        document.getElementById('status2').innerText = "✅ STATUS: TELEMETRY SIGNED";
        checkGlobalStatus();
    } else {
        alert("Verification Failure: Digital signatures do not match database keys.");
    }
}

function verifyCard3() {
    if (getInputValue('q15') === targetAnswers.q15 &&
        getInputValue('q16') === targetAnswers.q16 &&
        getInputValue('q17') === targetAnswers.q17 &&
        getInputValue('q18') === targetAnswers.q18 &&
        getInputValue('q19') === targetAnswers.q19 &&
        getInputValue('q20') === targetAnswers.q20 &&
        getInputValue('q21') === targetAnswers.q21 &&
        getInputValue('q22') === targetAnswers.q22) {
        
        card3Cleared = true;
        document.getElementById('card3').classList.add('card-verified');
        document.getElementById('status3').innerText = "✅ STATUS: FORENSICS SECURED";
        checkGlobalStatus();
    } else {
        alert("Verification Failure: Core profile parameters out of alignment.");
    }
}

// Final Decryption Routine
function checkGlobalStatus() {
    if (card1Cleared && card2Cleared && card3Cleared) {
        document.getElementById('verdictVault').classList.remove('hidden');
        window.scrollTo({
            top: document.getElementById('verdictVault').offsetTop,
            behavior: 'smooth'
        });
    }
}