let isLoggedIn = false;
let history = [1.2, 5.4, 1.15, 2.3];

function openGame(gameId) {
    if (gameId === 'aviator') {
        document.getElementById('home-screen').style.display = 'none';
        document.getElementById('aviator-screen').style.display = 'block';
        updateHistory();
        startAviatorCycle();
    } else {
        alert(gameId + " is coming soon!");
    }
}

function goHome() {
    document.getElementById('aviator-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}

function startAviatorCycle() {
    let mult = 1.00;
    let plane = document.getElementById("plane-container");
    let txt = document.getElementById("multiplier");
    
    txt.style.color = "white"; // Reset color
    let crashAt = (Math.random() < 0.7) ? (1.0 + Math.random() * 0.5) : (1.5 + Math.random() * 4);

    let timer = setInterval(() => {
        mult += 0.02;
        txt.innerText = mult.toFixed(2) + "x";
        
        // MOVEMENT: Slowly move the plane container up and right
        let posX = (mult - 1) * 30; // Move right
        let posY = (mult - 1) * -15; // Move up (negative value moves it up)
        plane.style.transform = `translate(${posX}px, ${posY}px)`;

        if (mult >= crashAt) {
            clearInterval(timer);
            txt.innerText = mult.toFixed(2) + "x CRASHED";
            txt.style.color = "red";
            updateHistoryArray(mult.toFixed(2));
            
            setTimeout(() => {
                // If the game screen is still open, start a new round
                if (document.getElementById('aviator-screen').style.display === 'block') {
                    startAviatorCycle();
                }
            }, 3000);
        }
    }, 100);
}

function updateHistoryArray(val) {
    history.unshift(val);
    if(history.length > 8) history.pop();
    updateHistory();
}

function updateHistory() {
    let box = document.getElementById("history-box");
    box.innerHTML = history.map(h => `<span class="hist-item">${h}x</span>`).join('');
}

function checkAuth() {
    document.getElementById("login-modal").style.display = "block";
}

function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}
