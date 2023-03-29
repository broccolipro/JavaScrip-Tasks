

let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

let button = document.getElementById('btn');

button.onclick = function () {
    let inputDate = document.getElementById('input').value;
    let fullYears = new Date().getFullYear() - new Date(inputDate).getFullYear()

    years.innerHTML = `Years: ${fullYears}`;
    months.innerHTML = `Months: ${fullYears * 12}`;
    days.innerHTML = `Days: ${Math.floor((new Date().getTime() - new Date(inputDate).getTime()) / (1000 * 60 * 60 * 24))}`;
}

