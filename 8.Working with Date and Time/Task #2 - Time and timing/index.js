let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');

let state;

function drawClock() {
    let date = new Date();
    if (state) {
        hours.innerHTML = `${date.getHours()}`.padStart(2, '0');
        minutes.innerHTML = `${date.getMinutes()}`.padStart(2, '0');
        seconds.innerHTML = `${date.getSeconds()}`.padStart(2, '0');
    }
}

startBtn.onclick = function () {
    if (!state) {
        state = setInterval(drawClock, 1000)
    }
    drawClock();
}

stopBtn.onclick = function () {
    clearInterval(state)
    state = null;
}