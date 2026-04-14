function openGame(gameId) {
    // होम स्क्रीन को छिपाएं
    document.getElementById('home-screen').style.display = 'none';
    
    // सिलेक्ट किए गए गेम को दिखाएं
    let gameScreen = document.getElementById(gameId + '-screen');
    gameScreen.style.display = 'block';
    
    // अगर एवििएटर है तो गेम शुरू करें
    if (gameId === 'aviator') {
        startAviatorCycle();
    }
}

function goHome() {
    // गेम स्क्रीन छिपाएं और होम दिखाएं
    document.getElementById('aviator-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
}
