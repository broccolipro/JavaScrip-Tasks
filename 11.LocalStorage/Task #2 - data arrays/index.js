const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos();

addBtn.onclick = function () {
    let value = input.value.trim();
    if (!value) return;

    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
    input.value = '';
    input.focus();
}

list.onclick = function (event) {
    if (event.target.tagName !== 'STRONG') return;
    let todoIndex = Array.from(list.children).indexOf(event.target.closest('li'));
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}


function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo) => {
        let li = document.createElement('li');
        li.innerHTML = `${todo} <strong> ☓</strong>`;
        list.prepend(li);
    })
}


