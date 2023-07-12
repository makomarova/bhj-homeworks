const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let clickCount = Number(clickerCounter.textContent);
let startTime = Date.now();

function cookieClick() {
    let speed = (1 / (Date.now() - startTime)) * 1000;
    startTime = Date.now();
    clickerSpeed.textContent = speed.toFixed(2);
    clickCount += 1;
    clickerCounter.textContent = clickCount;
    if(cookie.width === 200) {
    cookie.width = 170;
    } else {
        cookie.width = 200;
    }
};

cookie.onclick = cookieClick;