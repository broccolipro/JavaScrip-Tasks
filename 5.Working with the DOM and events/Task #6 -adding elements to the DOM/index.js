
let table = document.querySelector('table');
let color = 'wheat';

for (let tr of table.rows) {
    for (let td of tr.cells) {
        td.style.background = color;
        color = (color === 'black') ? 'wheat' : 'black';
    }
    color = (color === 'black') ? 'wheat' : 'black';
}