let [daysSpan, hoursSpan, minutesSpan, secondsSpan] = (document.getElementsByClassName('clock'));

let startBtn = document.getElementById('start');
let clearBtn = document.getElementById('clear');

let daysNum, hoursNum, minutesNum, secondsNum;
let totalMilliseconds;
let timeInterval;

function drawTime() {
    if (totalMilliseconds <= 0) {
        alert('Time left');
        clearClock();
        return;
    }

    totalMilliseconds -= 1000;

    let totalSeconds = Math.floor(totalMilliseconds / 1000);
    let totalMinutes = Math.floor(totalSeconds / 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let totalDays = Math.floor(totalHours / 24);

    let seconds = totalSeconds % 60;
    let minutes = totalMinutes % 60;
    let hours = totalHours % 24;

    daysSpan.innerHTML = `${totalDays}`.padStart(2, '0');
    hoursSpan.innerHTML = `${hours}`.padStart(2, '0');
    minutesSpan.innerHTML = `${minutes}`.padStart(2, '0');
    secondsSpan.innerHTML = `${seconds}`.padStart(2, '0');

}

startBtn.onclick = function () {
    [daysNum, hoursNum, minutesNum, secondsNum] = Array
        .from(document.getElementsByClassName('value'))
        .map((item) => parseInt(item.value));

    totalMilliseconds =
        ((daysNum * 24 * 60 * 60 * 1000) +
            (hoursNum * 60 * 60 * 1000) +
            (minutesNum * 60 * 1000) +
            (secondsNum) * 1000)

    timeInterval = setInterval(drawTime, 1000);
    drawTime();
}

clearBtn.onclick =clearClock;

function clearClock() {
    [daysSpan, hoursSpan, minutesSpan, secondsSpan].map((item) => item.innerHTML = '00');
    clearInterval(timeInterval);
    timeInterval = null;
}