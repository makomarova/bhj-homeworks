let timerValue = Number(document.getElementById('timer').textContent);
function setTime(){
    if (timerValue === 0){
        clearInterval(timerId);
        alert ('Вы победили в конкурсе!');
        return;
    }
    timerValue = timerValue - 1;
    document.getElementById('timer').textContent = timerValue;
};
let timerId = setInterval(setTime, 1000);