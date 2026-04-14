let balance = 500;
const winRate = 30; // 30% विन, 70% लॉस

function playGame(gameName) {
    let bet = prompt("बैट राशि डालें (Enter Bet Amount):");
    if (bet > balance) { alert("Balance कम है!"); return; }

    let chance = Math.floor(Math.random() * 100);
    if (chance < winRate) {
        balance += parseInt(bet);
        alert(gameName + " में आप जीत गए! 🎉");
    } else {
        balance -= parseInt(bet);
        alert(gameName + " में आप हार गए। ❌");
    }
    document.getElementById("balance").innerText = "₹ " + balance;
}
