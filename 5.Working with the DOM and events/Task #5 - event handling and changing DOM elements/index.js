let downBtn = document.getElementById('-');
let upBtn = document.getElementById('+');
let input = document.querySelector('input');

downBtn.onclick = function (e) {
    let value = +(input.value);
    if (value === 1) downBtn.disabled = true;
    if (upBtn.disabled) upBtn.disabled = false;
    input.value = `${value - 1}`;
}

upBtn.onclick = function (e) {
    let value = +(input.value);
    if (downBtn.disabled) downBtn.disabled = false;
    if (value === 8) upBtn.disabled = true;
    input.value = `${value + 1}`;
}

