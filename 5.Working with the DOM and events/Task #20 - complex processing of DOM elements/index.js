let input = document.querySelector('#input');
let button = document.querySelector('#btn');
let table = document.querySelector('table')

button.onclick = function (event) {
    let content = input.value.trim();
    if (!content) {
        event.preventDefault();
        return;
    }

    let tr = `<tr><td>${content}</td><td class="delete">×</td></tr>`;
    table.innerHTML += tr;

    input.value = '';
    input.focus();
}

table.onclick = function (event) {
    if (event.target.classList.contains('delete')) {
        event.target.closest('tr').remove();
    }
}
