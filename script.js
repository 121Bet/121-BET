let isLoggedIn = false;
let history = [1.2, 2.5, 1.05];

function openGame(gameId) {
    if (gameId === 'aviator') {
        document.getElementById('home-screen').classList.add('hidden');
        document.getElementById('aviator-screen').classList.remove('hidden');
        startAviatorCycle(); // Game tabhi shuru hoga jab click karenge
    } else {
        alert(gameId + " is coming soon!");
    }
}

function goHome() {
    document.getElementById('aviator-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    // Cycle ko stop karne ka logic yahan daal sakte hain
}

function startAviatorCycle() {
    let mult = 1.00;
    let plane = document.getElementById("plane");
    let txt = document.getElementById("multiplier");
    let crashAt = (Math.random() < 0.7) ? (1.0 + Math.random() * 0.5) : (1.5 + Math.random() * 4);

    let timer = setInterval(() => {
        mult += 0.02;
        txt.innerText = mult.toFixed(2) + "x";
        plane.style.left = (mult * 20) + "px";
        
        if (mult >= crashAt) {
            clearInterval(timer);
            txt.innerText = mult.toFixed(2) + "x CRASHED";
            txt.style.color = "red";
            updateHistory(mult.toFixed(2));
            setTimeout(() => {
                txt.style.color = "white";
                if(!document.getElementById('aviator-screen').classList.contains('hidden')) {
                    startAviatorCycle();
                }
            }, 3000);
        }
    }, 100);
}

function updateHistory(val) {
    history.unshift(val);
    let box = document.getElementById("history-box");
    box.innerHTML = history.slice(0, 8).map(h => `<span class="hist-item">${h}x</span>`).join('');
}

function checkAuth() {
    document.getElementById("login-modal").style.display = "block";
}
// बाकी login/close functions waisa hi rakhen
