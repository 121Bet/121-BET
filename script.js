let isLoggedIn = false; // By default user login nahi hai
let balance = 0;
let history = [1.20, 5.40, 1.05, 2.30, 1.15]; // Fake pichli history

// Page load hote hi game aur history shuru karein
window.onload = function() {
    updateHistory();
    startLiveCycle();
};

function updateHistory() {
    let box = document.getElementById("history-box");
    box.innerHTML = "";
    history.forEach(val => {
        box.innerHTML += `<span class="hist-item">${val}x</span>`;
    });
}

function startLiveCycle() {
    let mult = 1.00;
    let plane = document.getElementById("plane");
    let txt = document.getElementById("multiplier");
    
    // 70% chance to crash early (GUEST VIEW LOGIC)
    let crashAt = (Math.random() < 0.7) ? (1.0 + Math.random() * 0.5) : (1.5 + Math.random() * 4);

    let timer = setInterval(() => {
        mult += 0.02;
        txt.innerText = mult.toFixed(2) + "x";
        plane.style.left = (mult * 20) + "px";
        plane.style.bottom = (mult * 15) + "px";

        if (mult >= crashAt) {
            clearInterval(timer);
            txt.innerText = mult.toFixed(2) + "x CRASHED";
            txt.style.color = "red";
            history.unshift(mult.toFixed(2)); // Add to history
            if(history.length > 10) history.pop();
            updateHistory();
            
            setTimeout(() => {
                txt.style.color = "white";
                startLiveCycle(); // Agla round shuru
            }, 3000);
        }
    }, 100);
}

// Bet check karne wala function
function checkAuth() {
    if (!isLoggedIn) {
        document.getElementById("login-modal").style.display = "block";
    } else {
        alert("Bet Placed! Balance: " + balance);
    }
}

function closeLogin() {
    document.getElementById("login-modal").style.display = "none";
}

// Login ko simulate karne ke liye
function loginSuccess() {
    isLoggedIn = true;
    balance = 500;
    document.getElementById("balance").innerText = "Balance: ₹ " + balance;
    closeLogin();
}
